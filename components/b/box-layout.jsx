import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_1x96bbx.css';
import '../../css/d/dcq9h0--p.css';
import '../../css/r/rze6_0bfd.css';
import '../../css/e/e2i74rx7p.css';
import '../../css/j/jiv92k4md.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i_1x96bbx"/><path class="dcq9h0--p"/><rect class="rze6_0bfd"/><rect class="e2i74rx7p"/><path class="jiv92k4md"/></g>`,
		"fallback": "glyphs-poly:box-layout",
	});
}

export default Component;
