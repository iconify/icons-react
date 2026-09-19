import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i793flwcp.css';
import '../../css/m/m5_x9zgtq.css';
import '../../css/k/kaec_pgza.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i793flwcp"/><path class="m5_x9zgtq"/><path class="kaec_pgza"/></g>`,
		"fallback": "glyphs:house-water-duo",
	});
}

export default Component;
