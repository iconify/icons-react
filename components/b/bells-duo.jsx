import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7vnnri4v.css';
import '../../css/c/ci7wbvb4k.css';
import '../../css/a/aol4a8b2f.css';
import '../../css/w/w2yiwxbqg.css';
import '../../css/b/bcr3eobbb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7vnnri4v"/><path class="ci7wbvb4k"/><path class="aol4a8b2f"/><path class="w2yiwxbqg"/><path class="bcr3eobbb"/></g>`,
		"fallback": "glyphs:bells-duo",
	});
}

export default Component;
