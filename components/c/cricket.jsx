import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x2oq-2_ls.css';
import '../../css/m/mp3y5dtcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k x2oq-2_ls"/><path class="mp3y5dtcn wm-a"/></g>`,
		"fallback": "withicons-bauhaus:cricket",
	});
}

export default Component;
