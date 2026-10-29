import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pfemu5b7e.css';
import '../../css/h/hbpbqdaxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pfemu5b7e wm-k"/><path class="hbpbqdaxk wm-a"/></g>`,
		"fallback": "withicons-bauhaus:cloud-moon",
	});
}

export default Component;
