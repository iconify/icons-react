import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht2wsye4q.css';
import '../../css/h/h89mlxp4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht2wsye4q"/><path class="h89mlxp4r"/></g>`,
		"fallback": "coolicons:camera-duotone-round",
	});
}

export default Component;
