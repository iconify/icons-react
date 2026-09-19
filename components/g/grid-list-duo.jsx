import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqe204b-o.css';
import '../../css/c/co5bilbru.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kqe204b-o"/><path class="co5bilbru"/></g>`,
		"fallback": "glyphs:grid-list-duo",
	});
}

export default Component;
