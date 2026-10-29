import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wl26z3buk.css';
import '../../css/t/ta5ofbbmt.css';
import '../../css/z/z3cb_j7ez.css';
import '../../css/m/mgcd3gpsc.css';
import '../../css/i/ild3phboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wl26z3buk"/><path class="ta5ofbbmt wm-a"/><path class="z3cb_j7ez"/><path class="mgcd3gpsc wm-a"/><path class="ild3phboo"/></g>`,
		"fallback": "withicons:bus-duo",
	});
}

export default Component;
