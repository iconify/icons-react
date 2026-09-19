import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-azkpblh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-azkpblh"/>`,
		"fallback": "glyphs-poly:chevron",
	});
}

export default Component;
