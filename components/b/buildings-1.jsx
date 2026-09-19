import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nx-mj0xoc.css';
import '../../css/s/s7xm1ubhg.css';
import '../../css/m/m6fxu57dt.css';
import '../../css/c/cf-mxkbsh.css';
import '../../css/i/iwtfi9b9a.css';
import '../../css/l/l5zq7bcwk.css';
import '../../css/a/aw3_k-l2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nx-mj0xoc"/><path class="s7xm1ubhg"/><path class="m6fxu57dt"/><path class="cf-mxkbsh"/><path class="iwtfi9b9a"/><path class="l5zq7bcwk"/><path class="aw3_k-l2u"/></g>`,
		"fallback": "glyphs-poly:buildings-1",
	});
}

export default Component;
