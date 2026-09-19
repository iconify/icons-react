import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/d/d1iuoeb3y.css';
import '../../css/d/d3co6xbya.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="d1iuoeb3y"/><path class="d3co6xbya"/></g>`,
		"fallback": "catppuccin:circle-ci",
	});
}

export default Component;
