import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqujkybpc.css';
import '../../css/m/mysunmbhd.css';
import '../../css/j/jz39trb1d.css';

const viewBox = {"width":80,"height":81};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqujkybpc"/><path class="mysunmbhd"/><path class="jz39trb1d"/></g>`,
		"fallback": "glyphs-poly:chart-line-1",
	});
}

export default Component;
