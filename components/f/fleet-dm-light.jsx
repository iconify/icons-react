import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr2b3abya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr2b3abya"/>`,
		"fallback": "selfhst:fleet-dm-light",
	});
}

export default Component;
