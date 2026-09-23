import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bhj_ifbwh.css';
import '../../css/f/flz8mqbuo.css';
import '../../css/v/vura0hvqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bhj_ifbwh"/><path class="flz8mqbuo"/><path class="vura0hvqc"/></g>`,
		"fallback": "keyline-icons:file-sparkles-sharp-duotone",
	});
}

export default Component;
