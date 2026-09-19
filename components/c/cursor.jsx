import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz7s1z9sz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz7s1z9sz"/>`,
		"fallback": "cil:cursor",
	});
}

export default Component;
