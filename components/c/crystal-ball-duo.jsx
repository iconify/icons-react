import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cru75rbop.css';
import '../../css/o/o-8_tlbof.css';
import '../../css/o/oe5vmrb1n.css';
import '../../css/p/p8jzkvbki.css';
import '../../css/w/wbow0vbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cru75rbop"/><path class="o-8_tlbof wm-a"/><path class="oe5vmrb1n wm-s"/><path class="p8jzkvbki"/><path class="wbow0vbca wm-a"/></g>`,
		"fallback": "withicons:crystal-ball-duo",
	});
}

export default Component;
