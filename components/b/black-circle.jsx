import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl81vn0ac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl81vn0ac"/>`,
		"fallback": "fluent-emoji-flat:black-circle",
	});
}

export default Component;
