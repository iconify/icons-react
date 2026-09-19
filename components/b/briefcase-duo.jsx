import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sjyu3g0yf.css';
import '../../css/w/w5l3mbitk.css';
import '../../css/p/pl_50btdl.css';
import '../../css/t/t_w36ccaf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sjyu3g0yf"/><path class="w5l3mbitk"/><path class="pl_50btdl"/><path class="t_w36ccaf"/></g>`,
		"fallback": "glyphs:briefcase-duo",
	});
}

export default Component;
