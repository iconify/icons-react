import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1bbndrsh.css';
import '../../css/c/c6y1s8ces.css';
import '../../css/o/o4x2yi1vx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j1bbndrsh"><path clip-rule="evenodd" class="c6y1s8ces"/><path class="o4x2yi1vx"/></g>`,
		"fallback": "glyphs:eye-1-outline",
	});
}

export default Component;
