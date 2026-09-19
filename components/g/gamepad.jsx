import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unnw82k4d.css';
import '../../css/m/m4577_bii.css';
import '../../css/d/d3xpk_fla.css';
import '../../css/p/p34h9gxaf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="unnw82k4d"/><path class="m4577_bii"/><path clip-rule="evenodd" class="d3xpk_fla"/><path class="p34h9gxaf"/></g>`,
		"fallback": "glyphs-poly:gamepad",
	});
}

export default Component;
