import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfwz52s2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfwz52s2w"/>`,
		"fallback": "fa-solid:gift",
	});
}

export default Component;
