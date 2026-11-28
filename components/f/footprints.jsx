import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ku0xfq--d.css';
import '../../css/u/ubfqcobgc.css';
import '../../css/v/vp3srkb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ku0xfq--d"/><path class="ubfqcobgc"/><path class="vp3srkb8z"/></g>`,
		"fallback": "iconaut:footprints",
	});
}

export default Component;
