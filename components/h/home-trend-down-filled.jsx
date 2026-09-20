import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hmy3r2m2j.css';
import '../../css/f/fop9toswg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hmy3r2m2j"/><path class="fop9toswg"/></g>`,
		"fallback": "reicon:home-trend-down-filled",
	});
}

export default Component;
