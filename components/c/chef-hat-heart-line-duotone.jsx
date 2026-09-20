import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nnenlb9-y.css';
import '../../css/g/g9h454b1v.css';
import '../../css/c/cjw43km3x.css';
import '../../css/b/bscxys1lk.css';
import '../../css/m/maxmd-b_j.css';
import '../../css/l/l5mj12bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nnenlb9-y"/><path class="g9h454b1v"/><path class="cjw43km3x"/><path class="bscxys1lk"/><path class="maxmd-b_j"/><path class="l5mj12bgx"/></g>`,
		"fallback": "solar:chef-hat-heart-line-duotone",
	});
}

export default Component;
