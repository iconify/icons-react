import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpalt4_oj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpalt4_oj"/>`,
		"fallback": "cib:asana",
	});
}

export default Component;
