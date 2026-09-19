import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpje716il.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpje716il"/>`,
		"fallback": "zmdi:format-align-center",
	});
}

export default Component;
