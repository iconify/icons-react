import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plse3wbhe.css';
import '../../css/c/c1b3qhe5v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="plse3wbhe"/><path class="c1b3qhe5v"/></g>`,
		"fallback": "glyphs:canoe-duo",
	});
}

export default Component;
