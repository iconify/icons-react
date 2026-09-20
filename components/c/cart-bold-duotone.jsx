import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/me44qacwj.css';
import '../../css/f/fpb37bc7d.css';
import '../../css/i/iwr_mlcbj.css';
import '../../css/j/jfifsfbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="me44qacwj"/><path class="fpb37bc7d"/></g><path class="iwr_mlcbj"/><path class="jfifsfbrn"/></g>`,
		"fallback": "solar:cart-bold-duotone",
	});
}

export default Component;
