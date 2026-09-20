import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqjfimbab.css';
import '../../css/d/dzu-ecctv.css';
import '../../css/p/ptgawoh2e.css';
import '../../css/c/ci5f0y_xe.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wqjfimbab"/><path class="dzu-ecctv"/><path class="ptgawoh2e"/><path class="ci5f0y_xe"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:building-off",
	});
}

export default Component;
