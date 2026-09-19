import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij0-gp5hj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij0-gp5hj"/>`,
		"fallback": "glyphs:h-3-bold",
	});
}

export default Component;
