import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/e/exgld-b-f.css';
import '../../css/i/iok8l6mas.css';
import '../../css/k/k0j6oyc4l.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/d/d20-0wyrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="v3g6xoxym"/><path class="exgld-b-f"/><path class="iok8l6mas"/><path class="k0j6oyc4l"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/></g>`,
		"fallback": "solar:diploma-linear",
	});
}

export default Component;
