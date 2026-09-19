import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osl_ewbwa.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osl_ewbwa"/>`,
		"fallback": "f7:eye-fill",
	});
}

export default Component;
