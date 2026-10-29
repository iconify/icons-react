import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whk4pe4jr.css';
import '../../css/w/w4f1phn-n.css';
import '../../css/z/zegtxvsso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="whk4pe4jr"/><path class="w4f1phn-n wm-a"/><path class="zegtxvsso"/></g>`,
		"fallback": "withicons:burger",
	});
}

export default Component;
