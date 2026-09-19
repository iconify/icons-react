import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4ydp4bxr.css';
import '../../css/n/n3wsw6bvy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4ydp4bxr"/><path class="n3wsw6bvy"/></g>`,
		"fallback": "glyphs:anchor-duo",
	});
}

export default Component;
