import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/ljtayob0g.css';
import '../../css/q/q3ivf5tky.css';
import '../../css/y/yfb696n5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ljtayob0g"/><path class="q3ivf5tky wm-k"/><path class="wm-a yfb696n5o"/></g>`,
		"fallback": "withicons:baguette-sketch",
	});
}

export default Component;
