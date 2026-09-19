import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxy3m40ml.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxy3m40ml"/>`,
		"fallback": "glyphs:cursor-outline",
	});
}

export default Component;
