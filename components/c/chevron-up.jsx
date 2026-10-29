import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vuyr8rbbm.css';
import '../../css/r/rcoj-_9nl.css';
import '../../css/h/hja6yzbsc.css';
import '../../css/d/d6_3qlb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vuyr8rbbm wm-k"/><path class="rcoj-_9nl wm-k"/><path class="hja6yzbsc wm-k"/><path class="d6_3qlb9a wm-shine"/></g>`,
		"fallback": "withicons-anime:chevron-up",
	});
}

export default Component;
