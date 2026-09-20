import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkozo_oty.css';
import '../../css/m/mihc76bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wkozo_oty"/><path class="mihc76bhx"/></g>`,
		"fallback": "reicon:dark-light-filled",
	});
}

export default Component;
