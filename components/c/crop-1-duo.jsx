import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea_n0eb7u.css';
import '../../css/l/lwi-ajbjg.css';
import '../../css/d/do6sbpbpf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ea_n0eb7u"/><path class="lwi-ajbjg"/><path class="do6sbpbpf"/></g>`,
		"fallback": "glyphs:crop-1-duo",
	});
}

export default Component;
