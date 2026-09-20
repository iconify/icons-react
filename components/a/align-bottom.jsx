import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l400bnd5u.css';
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
		"content": `<g class="hntgybcog"><path class="l400bnd5u"/><rect transform="matrix(-1 0 0 1 19.75 7.75)" class="rj5v1bbrm"/><rect transform="matrix(-1 0 0 1 10.25 2.75)" class="yvwyapbau"/></g>`,
		"fallback": "proicons:align-bottom",
	});
}

export default Component;
