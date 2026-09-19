import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnc7j12jl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnc7j12jl"/>`,
		"fallback": "glyphs:code-bold",
	});
}

export default Component;
