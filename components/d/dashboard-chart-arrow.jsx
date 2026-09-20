import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tbfod3hgq.css';
import '../../css/v/vy_2r-zvg.css';
import '../../css/h/hmq76m6xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="tbfod3hgq"/><path class="vy_2r-zvg"/><path class="hmq76m6xr"/></g>`,
		"fallback": "mage:dashboard-chart-arrow",
	});
}

export default Component;
