import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt1bfvb9s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt1bfvb9s"/>`,
		"fallback": "fluent-mdl2:caret-solid-down",
	});
}

export default Component;
