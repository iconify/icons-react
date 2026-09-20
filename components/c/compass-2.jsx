import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyt6chbyr.css';
import '../../css/c/cn7jx1b6i.css';
import '../../css/z/z9_j90e6s.css';
import '../../css/f/fy_rgeben.css';
import '../../css/d/dzo72ib3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyt6chbyr"/><path class="cn7jx1b6i"/><path class="z9_j90e6s"/><path class="fy_rgeben"/><path class="dzo72ib3k"/></g>`,
		"fallback": "streamline-cyber-color:compass-2",
	});
}

export default Component;
