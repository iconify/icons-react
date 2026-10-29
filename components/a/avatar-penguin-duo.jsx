import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qbxp0_3ai.css';
import '../../css/t/txqvo_bav.css';
import '../../css/k/k1xf4_bso.css';
import '../../css/e/ewou_cb1d.css';
import '../../css/b/bxvuuqbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qbxp0_3ai"/><path class="txqvo_bav"/><path class="k1xf4_bso wm-a"/><path class="ewou_cb1d"/><path class="bxvuuqbyr"/></g>`,
		"fallback": "withicons:avatar-penguin-duo",
	});
}

export default Component;
