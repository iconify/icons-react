import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q5kmf509r.css';
import '../../css/f/fo43xbclk.css';
import '../../css/b/bh-w7xjmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q5kmf509r"/><rect transform="rotate(-90 7.75 19.75)" class="fo43xbclk"/><rect transform="rotate(-90 2.75 10.25)" class="bh-w7xjmo"/></g>`,
		"fallback": "proicons:align-right",
	});
}

export default Component;
