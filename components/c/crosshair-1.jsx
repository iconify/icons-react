import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnpjweblo.css';
import '../../css/h/h9vbj4blh.css';
import '../../css/k/kmgsmimva.css';
import '../../css/d/dv4-vebuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wnpjweblo"/><path class="h9vbj4blh"/><path class="kmgsmimva"/><path class="dv4-vebuc"/></g>`,
		"fallback": "streamline-cyber-color:crosshair-1",
	});
}

export default Component;
