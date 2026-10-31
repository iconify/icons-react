import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rczdnpkkp.css';
import '../../css/w/wp_p0wvuz.css';
import '../../css/l/l29rf7_0z.css';
import '../../css/t/twv38kt5g.css';
import '../../css/v/v1-cnzbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rczdnpkkp wm-shadow"/><path class="wp_p0wvuz"/><path class="l29rf7_0z"/><path class="twv38kt5g"/><path class="v1-cnzbgg"/></g>`,
		"fallback": "withicons-retro:cloud-alert",
	});
}

export default Component;
