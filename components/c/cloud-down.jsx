import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlx2oubwz.css';
import '../../css/v/vok929bes.css';
import '../../css/m/meco3rogb.css';
import '../../css/s/s29ll1g5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mlx2oubwz"/><path class="vok929bes"/><path class="meco3rogb"/><path class="s29ll1g5q"/></g>`,
		"fallback": "pepicons:cloud-down",
	});
}

export default Component;
