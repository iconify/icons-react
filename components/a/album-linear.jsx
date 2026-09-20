import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnsop5_4w.css';
import '../../css/a/avzl98b-s.css';
import '../../css/z/z__g5t12m.css';
import '../../css/j/jzpwi7boj.css';
import '../../css/m/mrg39pbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vnsop5_4w"/><path class="avzl98b-s"/><path class="z__g5t12m"/><circle class="jzpwi7boj"/><path class="mrg39pbdx"/></g>`,
		"fallback": "solar:album-linear",
	});
}

export default Component;
