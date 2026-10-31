import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g9zgveboe.css';
import '../../css/e/eteor54oq.css';
import '../../css/f/fb3a44jcd.css';
import '../../css/p/pcs-545kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g9zgveboe wm-shadow"/><path class="eteor54oq"/><path class="fb3a44jcd"/><path class="pcs-545kw"/></g>`,
		"fallback": "withicons-retro:face-mask",
	});
}

export default Component;
