import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn0ef8o0z.css';
import '../../css/g/gee2rmnvh.css';
import '../../css/n/ngwg5d_wp.css';
import '../../css/c/cx3zwzdul.css';
import '../../css/f/fh3cy3_vx.css';
import '../../css/z/zgm57cw6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn0ef8o0z"/><path class="gee2rmnvh"/><path class="ngwg5d_wp"/><path class="cx3zwzdul"/><path class="fh3cy3_vx"/><path class="zgm57cw6s"/></g>`,
		"fallback": "streamline-ultimate-color:alarm-bell-sleep-1",
	});
}

export default Component;
