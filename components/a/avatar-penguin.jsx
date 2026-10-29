import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ewou_cb1d.css';
import '../../css/w/wpx2v_c8k.css';
import '../../css/k/k1xf4_bso.css';
import '../../css/u/ukf9b-bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ewou_cb1d"/><path class="wpx2v_c8k"/><path class="k1xf4_bso wm-a"/><path class="ukf9b-bih"/></g>`,
		"fallback": "withicons:avatar-penguin",
	});
}

export default Component;
