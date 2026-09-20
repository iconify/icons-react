import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e_rw3tb2y.css';
import '../../css/f/f5mcp3p6l.css';
import '../../css/m/myds06t7f.css';
import '../../css/k/kqbg0g8jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e_rw3tb2y"/><path class="f5mcp3p6l"/><path class="myds06t7f"/><path class="kqbg0g8jb"/></g>`,
		"fallback": "solar:basketball-linear",
	});
}

export default Component;
