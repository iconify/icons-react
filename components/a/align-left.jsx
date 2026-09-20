import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cuimd9b-p.css';
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
		"content": `<g class="hntgybcog"><path class="cuimd9b-p"/><rect transform="matrix(0 -1 -1 0 16.25 19.75)" class="rj5v1bbrm"/><rect transform="matrix(0 -1 -1 0 21.25 10.25)" class="yvwyapbau"/></g>`,
		"fallback": "proicons:align-left",
	});
}

export default Component;
