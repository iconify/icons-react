import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xxnnixb_j.css';
import '../../css/s/s-b9mp_do.css';
import '../../css/g/ghy1agb1b.css';
import '../../css/q/qlkgjzbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wm-a xxnnixb_j"/><path class="s-b9mp_do"/><path class="ghy1agb1b wm-a"/><path class="qlkgjzbfl"/></g>`,
		"fallback": "withicons:cash-register-duo",
	});
}

export default Component;
