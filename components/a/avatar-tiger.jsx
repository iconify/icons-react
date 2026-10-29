import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ssadnlb_w.css';
import '../../css/r/r2o5n7qei.css';
import '../../css/p/plwqyqbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ssadnlb_w"/><path class="r2o5n7qei"/><path class="plwqyqbee wm-a"/></g>`,
		"fallback": "withicons:avatar-tiger",
	});
}

export default Component;
