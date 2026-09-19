import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_0c644vy.css';
import '../../css/q/q4_c29bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_0c644vy"/><path class="q4_c29bvt"/>`,
		"fallback": "boxicons:cupboard",
	});
}

export default Component;
