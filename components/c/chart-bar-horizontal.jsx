import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q0vi-9eru.css';
import '../../css/s/sjsppzltu.css';
import '../../css/s/skn8acc-z.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="q0vi-9eru"/><path class="sjsppzltu wm-k"/><path class="skn8acc-z wm-a"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-bar-horizontal",
	});
}

export default Component;
