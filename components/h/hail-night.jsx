import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq4d_iynl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq4d_iynl"/>`,
		"fallback": "fluent-mdl2:hail-night",
	});
}

export default Component;
