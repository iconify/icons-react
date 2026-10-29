import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro7tz4bzv.css';
import '../../css/h/h_ffhdx3r.css';
import '../../css/e/e1_59bbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro7tz4bzv wm-k"/><path class="h_ffhdx3r wm-a"/><path class="e1_59bbxb wm-k"/>`,
		"fallback": "withicons-bauhaus:indian-rupee",
	});
}

export default Component;
