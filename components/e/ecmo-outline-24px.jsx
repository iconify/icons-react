import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxwgb7p4b.css';
import '../../css/j/j4on_51kq.css';
import '../../css/d/du1p5sbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qxwgb7p4b"/><path class="j4on_51kq"/><path clip-rule="evenodd" class="du1p5sbuh"/></g>`,
		"fallback": "healthicons:ecmo-outline-24px",
	});
}

export default Component;
