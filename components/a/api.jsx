import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dzv5adbxy.css';
import '../../css/q/qywgiwg3y.css';
import '../../css/q/qx5seebns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dzv5adbxy wm-k"/><path class="qywgiwg3y wm-a"/><path class="qx5seebns"/></g>`,
		"fallback": "withicons-bauhaus:api",
	});
}

export default Component;
