import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc0s-3bss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc0s-3bss"/>`,
		"fallback": "selfhst:crowdsec-light",
	});
}

export default Component;
