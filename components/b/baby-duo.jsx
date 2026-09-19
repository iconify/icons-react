import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sc1vwlbob.css';
import '../../css/k/kolzgkbfi.css';
import '../../css/b/b-l6jb-8j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sc1vwlbob"/><path class="kolzgkbfi"/><path class="b-l6jb-8j"/></g>`,
		"fallback": "glyphs:baby-duo",
	});
}

export default Component;
