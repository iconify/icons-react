import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7-l25bjn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7-l25bjn"/>`,
		"fallback": "glyphs:building-3",
	});
}

export default Component;
