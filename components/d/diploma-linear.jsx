import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/h/h3xl994jw.css';
import '../../css/j/j6p0y4-0y.css';
import '../../css/b/bqm3nnn0i.css';
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
		"content": `<g class="ipq1z-bjh"><circle class="v3g6xoxym"/><path class="h3xl994jw"/><path class="j6p0y4-0y"/><path class="bqm3nnn0i"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/></g>`,
		"fallback": "solar:diploma-linear",
	});
}

export default Component;
