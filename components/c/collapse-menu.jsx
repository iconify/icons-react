import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu899ws8k.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu899ws8k"/>`,
		"fallback": "fluent-mdl2:collapse-menu",
	});
}

export default Component;
