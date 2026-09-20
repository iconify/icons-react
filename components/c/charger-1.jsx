import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfots6o3m.css';
import '../../css/y/y1z_pebua.css';
import '../../css/d/dps-eg3jw.css';
import '../../css/q/qd64s6b1d.css';
import '../../css/e/e-6gv4b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dfots6o3m"/><path class="y1z_pebua"/><path class="dps-eg3jw"/><path class="qd64s6b1d"/><path class="e-6gv4b7p"/></g>`,
		"fallback": "streamline-ultimate-color:charger-1",
	});
}

export default Component;
