import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hdcaesm7u.css';
import '../../css/g/gxte5cbbm.css';
import '../../css/k/k99a9ybxg.css';
import '../../css/k/kv56um1-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hdcaesm7u wm-k"/><path class="gxte5cbbm wm-a"/><path class="k99a9ybxg"/><path class="kv56um1-x"/></g>`,
		"fallback": "withicons-bauhaus:cash-register",
	});
}

export default Component;
