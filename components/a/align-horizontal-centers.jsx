import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ikr4zbc5h.css';
import '../../css/r/rj5v1bbrm.css';
import '../../css/y/yvwyapbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ikr4zbc5h"/><rect transform="matrix(-1 0 0 1 19.75 7)" class="rj5v1bbrm"/><rect transform="matrix(-1 0 0 1 10.25 4.5)" class="yvwyapbau"/></g>`,
		"fallback": "proicons:align-horizontal-centers",
	});
}

export default Component;
