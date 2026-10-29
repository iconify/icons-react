import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xw85vjb7b.css';
import '../../css/z/zbgyb8bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xw85vjb7b"/><path class="wm-a zbgyb8bwb"/></g>`,
		"fallback": "withicons:cloud-moon",
	});
}

export default Component;
