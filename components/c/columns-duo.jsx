import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zdv2jph6r.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/l/lg-8n1num.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zdv2jph6r"/><path class="h2-2dgnfu wm-a"/><path class="lg-8n1num"/></g>`,
		"fallback": "withicons:columns-duo",
	});
}

export default Component;
