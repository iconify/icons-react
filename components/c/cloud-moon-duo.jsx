import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ymyxtyy4a.css';
import '../../css/n/nms9a0b0c.css';
import '../../css/z/zbgyb8bwb.css';
import '../../css/x/xw85vjb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ymyxtyy4a"/><path class="nms9a0b0c wm-a"/><path class="wm-a zbgyb8bwb"/><path class="xw85vjb7b"/></g>`,
		"fallback": "withicons:cloud-moon-duo",
	});
}

export default Component;
