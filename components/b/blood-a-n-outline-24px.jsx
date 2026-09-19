import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw8g9_b8v.css';
import '../../css/l/l15qbrbre.css';
import '../../css/v/v4s2axqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bw8g9_b8v"/><path class="l15qbrbre"/><path clip-rule="evenodd" class="v4s2axqse"/></g>`,
		"fallback": "healthicons:blood-a-n-outline-24px",
	});
}

export default Component;
