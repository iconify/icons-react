import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m17lhab3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m17lhab3e"/>`,
		"fallback": "selfhst:akaunting",
	});
}

export default Component;
