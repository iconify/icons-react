import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq9rwybmn.css';
import '../../css/q/qcsq91b8p.css';
import '../../css/m/m07w31b6b.css';
import '../../css/y/ysq628bbg.css';
import '../../css/l/ldx9u4ytg.css';
import '../../css/y/y2kb67bgk.css';
import '../../css/b/bxn7y_33c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mq9rwybmn wm-k"/><path class="qcsq91b8p wm-deco"/><path class="m07w31b6b wm-k"/><path class="wm-k ysq628bbg"/><path class="ldx9u4ytg wm-shadow"/><path class="wm-shine y2kb67bgk"/><path class="bxn7y_33c wm-shine"/></g>`,
		"fallback": "withicons-valentine:cloud-alert",
	});
}

export default Component;
