import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw5e29kst.css';
import '../../css/k/kr9kmutvq.css';
import '../../css/r/rk4_9rbwv.css';
import '../../css/m/mt9npk33j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-45 32.27 1.4)scale(1 -1)" class="aw5e29kst"/><rect transform="rotate(-45 26.54 -12.43)scale(1 -1)" class="kr9kmutvq"/><path class="rk4_9rbwv"/><path class="mt9npk33j"/></g>`,
		"fallback": "andrsrxn:chocolate-bar",
	});
}

export default Component;
