import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1bbndrsh.css';
import '../../css/r/r2avjyb5n.css';
import '../../css/o/oosdw9lib.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j1bbndrsh"><path class="r2avjyb5n"/><path class="oosdw9lib"/></g>`,
		"fallback": "glyphs:chevron-double-outline",
	});
}

export default Component;
