import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/x/x8967onjv.css';
import '../../css/t/twg5a8tzq.css';
import '../../css/f/fdf08cccu.css';
import '../../css/s/svv5j3n5h.css';
import '../../css/f/fnas3rtbm.css';
import '../../css/e/ewxqi-btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="wm-k x8967onjv"/><path class="twg5a8tzq wm-k"/><path class="fdf08cccu wm-shine"/><path class="svv5j3n5h wm-a"/><path class="fnas3rtbm wm-a"/><path class="ewxqi-btb wm-a"/></g>`,
		"fallback": "withicons-anime:circle-play",
	});
}

export default Component;
