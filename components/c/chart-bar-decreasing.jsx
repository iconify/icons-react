import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/skn8acc-z.css';
import '../../css/c/c0bw40ovn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="skn8acc-z wm-a"/><path class="c0bw40ovn"/></g>`,
		"fallback": "withicons:chart-bar-decreasing",
	});
}

export default Component;
