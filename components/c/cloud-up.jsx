import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlx2oubwz.css';
import '../../css/i/ih154-0ss.css';
import '../../css/y/ysed92b4j.css';
import '../../css/k/kcd5utbru.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mlx2oubwz"/><path class="ih154-0ss"/><path class="ysed92b4j"/><path class="kcd5utbru"/></g>`,
		"fallback": "pepicons:cloud-up",
	});
}

export default Component;
