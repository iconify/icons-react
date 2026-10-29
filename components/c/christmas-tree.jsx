import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fn6tf1vwd.css';
import '../../css/m/ms3s4wbhz.css';
import '../../css/n/n0zo80fbk.css';
import '../../css/g/g_os4lb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fn6tf1vwd wm-k"/><path class="ms3s4wbhz wm-a"/><path class="n0zo80fbk"/><path class="g_os4lb3h"/></g>`,
		"fallback": "withicons-bauhaus:christmas-tree",
	});
}

export default Component;
