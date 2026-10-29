import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z0l13u7rz.css';
import '../../css/e/eumle_byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z0l13u7rz"/><path class="eumle_byd wm-a"/></g>`,
		"fallback": "withicons:apple",
	});
}

export default Component;
