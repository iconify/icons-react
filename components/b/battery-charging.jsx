import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxetctbkk.css';
import '../../css/h/hu81nxnew.css';
import '../../css/l/lifqzczhe.css';
import '../../css/s/s_k11pbna.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uxetctbkk"/><path class="hu81nxnew"/><path class="lifqzczhe"/><path class="s_k11pbna"/></g>`,
		"fallback": "bi:battery-charging",
	});
}

export default Component;
