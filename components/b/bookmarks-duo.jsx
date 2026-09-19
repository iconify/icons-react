import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktd21acbt.css';
import '../../css/o/o14py5b7r.css';
import '../../css/f/fl2utnblk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktd21acbt"/><path class="o14py5b7r"/><path class="fl2utnblk"/></g>`,
		"fallback": "glyphs:bookmarks-duo",
	});
}

export default Component;
