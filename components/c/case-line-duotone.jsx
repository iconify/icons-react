import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t2v-w55mg.css';
import '../../css/v/vigqkobhn.css';
import '../../css/v/vw7st-c2b.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/o/owo8jhnio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t2v-w55mg"/><path class="vigqkobhn"/><path class="vw7st-c2b"/><path class="jct4a2bzg"/><path class="owo8jhnio"/></g>`,
		"fallback": "solar:case-line-duotone",
	});
}

export default Component;
