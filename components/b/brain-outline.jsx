import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1a_pqbur.css';
import '../../css/d/dg72jac6n.css';
import '../../css/j/j9dphdx2s.css';
import '../../css/u/uslg9rb3x.css';
import '../../css/s/sby1-5ben.css';
import '../../css/k/kq_hqgbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1a_pqbur"/><path class="dg72jac6n"/><path class="j9dphdx2s"/><path class="uslg9rb3x"/><path class="sby1-5ben"/><path class="kq_hqgbwz"/></g>`,
		"fallback": "solar:brain-outline",
	});
}

export default Component;
