import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oxhuqlbav.css';
import '../../css/d/dp4pq58yk.css';
import '../../css/l/l080-zbuz.css';
import '../../css/c/cjw43km3x.css';
import '../../css/z/zkglr3x2x.css';
import '../../css/l/l5mj12bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oxhuqlbav"/><path class="dp4pq58yk"/><path class="l080-zbuz"/><path class="cjw43km3x"/><path class="zkglr3x2x"/><path class="l5mj12bgx"/></g>`,
		"fallback": "solar:chef-hat-minimalistic-broken",
	});
}

export default Component;
