import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnnd0yb_u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnnd0yb_u"/>`,
		"fallback": "osmic:butcher-14",
	});
}

export default Component;
