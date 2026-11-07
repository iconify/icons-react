import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z_plnwe8g.css';
import '../../css/l/lmh6yib_l.css';
import '../../css/v/v0-4-h-2h.css';
import '../../css/e/eymym15ry.css';
import '../../css/d/due70sa8a.css';
import '../../css/x/x555n9v5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z_plnwe8g"/><path class="lmh6yib_l"/><path class="v0-4-h-2h"/><path class="eymym15ry"/><path class="due70sa8a"/><path class="x555n9v5n"/></g>`,
		"fallback": "solar:dislike-broken",
	});
}

export default Component;
