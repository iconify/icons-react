import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s_m7_kbev.css';
import '../../css/r/r2b3htb0e.css';
import '../../css/d/didw3mbph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="s_m7_kbev"/><path class="r2b3htb0e"/><path class="didw3mbph"/></g>`,
		"fallback": "icon-park:brake-pads",
	});
}

export default Component;
