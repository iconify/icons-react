import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w0f6d_bws.css';
import '../../css/w/w27peibbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w0f6d_bws"/><path class="w27peibbj wm-a"/></g>`,
		"fallback": "withicons:black-cat",
	});
}

export default Component;
