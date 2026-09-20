import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-clk2b2f.css';
import '../../css/h/h3k0sgbof.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v-clk2b2f"/><path class="h3k0sgbof"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:chart-square3",
	});
}

export default Component;
