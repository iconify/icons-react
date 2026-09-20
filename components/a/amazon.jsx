import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc_ey41nw.css';
import '../../css/k/ko66oob-e.css';
import '../../css/x/xhkkl9buh.css';
import '../../css/z/zm-8e-b6m.css';
import '../../css/i/isq-b22bm.css';

const viewBox = {"width":603,"height":182};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hc_ey41nw"><path class="ko66oob-e"/><path class="xhkkl9buh"/><path class="zm-8e-b6m"/><use href="#SVGNYVVZbat" transform="translate(244.367)"/><path id="SVGNYVVZbat" class="isq-b22bm"/></g>`,
		"fallback": "thesvg-color:amazon",
	});
}

export default Component;
