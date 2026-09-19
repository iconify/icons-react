import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/y/y0r_bqb0y.css';
import '../../css/x/xsieectuu.css';
import '../../css/a/an__txbhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="y0r_bqb0y"/><path class="xsieectuu"/><path class="an__txbhx"/></g>`,
		"fallback": "icon-park-outline:agreement",
	});
}

export default Component;
