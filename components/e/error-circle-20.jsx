import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i951ry2rv.css';
import '../../css/w/w56t4bc2y.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/w/wk_lp_wlk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGydnWceli)" class="i951ry2rv"/><path fill="url(#SVGQIabMcGH)" clip-rule="evenodd" class="w56t4bc2y"/><defs><linearGradient id="SVGydnWceli" x1="4.5" x2="15" y1="-.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVGQIabMcGH" x1="8" x2="12" y1="6" y2="14" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="wk_lp_wlk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:error-circle-20",
	});
}

export default Component;
