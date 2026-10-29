import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dvwannbbz.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/b/biv-r_b9a.css';
import '../../css/y/yk993owos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dvwannbbz"/><path class="qr4ochb5c wm-s"/><path class="biv-r_b9a"/><path class="wm-a yk993owos"/></g>`,
		"fallback": "withicons:calendar-off-duo",
	});
}

export default Component;
