import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m6triwbzc.css';
import '../../css/w/w4f1phn-n.css';
import '../../css/j/jf-6btauh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m6triwbzc"/><path class="w4f1phn-n wm-a"/><path class="jf-6btauh"/></g>`,
		"fallback": "withicons:burger-duo",
	});
}

export default Component;
