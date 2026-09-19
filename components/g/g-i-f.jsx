import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-6z77lgj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-6z77lgj"/>`,
		"fallback": "fluent-mdl2:g-i-f",
	});
}

export default Component;
