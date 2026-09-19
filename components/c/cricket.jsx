import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3zko8bet.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3zko8bet"/>`,
		"fallback": "fluent-mdl2:cricket",
	});
}

export default Component;
