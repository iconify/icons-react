import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k_vx5zu1x.css';
import '../../css/g/gndq0ebyi.css';
import '../../css/d/d88nyzisv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k_vx5zu1x"/><path class="gndq0ebyi"/><path class="d88nyzisv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dumbbell",
	});
}

export default Component;
