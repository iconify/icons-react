import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/int_qkbtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="int_qkbtb"/>`,
		"fallback": "file-icons:3d-model",
	});
}

export default Component;
