import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iys3ltbnj.css';
import '../../css/i/i3nxxg_xz.css';
import '../../css/t/tt70qeycs.css';
import '../../css/i/i0b_8nkbs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iys3ltbnj"/><path class="i3nxxg_xz"/><path class="tt70qeycs"/><path class="i0b_8nkbs"/></g>`,
		"fallback": "glyphs:chart-pie-duo",
	});
}

export default Component;
