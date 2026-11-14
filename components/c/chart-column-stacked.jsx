import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mh181mj_g.css';
import '../../css/w/wyt8hgbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mh181mj_g"/><path class="wyt8hgbsx"/></g>`,
		"fallback": "hugeicons:chart-column-stacked",
	});
}

export default Component;
