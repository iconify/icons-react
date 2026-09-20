import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3e_k9cjw.css';
import '../../css/r/r28jh0b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o3e_k9cjw"/><path clip-rule="evenodd" class="r28jh0b2v"/></g>`,
		"fallback": "reicon:food-tray",
	});
}

export default Component;
