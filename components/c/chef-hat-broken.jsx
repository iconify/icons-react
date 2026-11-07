import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/znosj-b8g.css';
import '../../css/w/w8beb4y1h.css';
import '../../css/w/we6kgnh-l.css';
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
		"content": `<g class="ipq1z-bjh"><path class="znosj-b8g"/><path class="w8beb4y1h"/><path class="we6kgnh-l"/><path class="cjw43km3x"/><path class="zkglr3x2x"/><path class="l5mj12bgx"/></g>`,
		"fallback": "solar:chef-hat-broken",
	});
}

export default Component;
