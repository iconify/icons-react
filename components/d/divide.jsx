import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz-q7k4cs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz-q7k4cs"/>`,
		"fallback": "glyphs:divide",
	});
}

export default Component;
