import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fdttvf2ha.css';
import '../../css/y/yxdkshbqq.css';
import '../../css/y/ybii7cbeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fdttvf2ha wm-k"/><path class="yxdkshbqq"/><path class="wm-s ybii7cbeu"/></g>`,
		"fallback": "withicons-bauhaus:flashlight",
	});
}

export default Component;
