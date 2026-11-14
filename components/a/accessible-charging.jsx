import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4lcrg_oy.css';
import '../../css/q/q22fozbrr.css';
import '../../css/r/rgm89rb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="q4lcrg_oy"/><path class="q22fozbrr"/><path class="rgm89rb0x"/></g>`,
		"fallback": "evicons:accessible-charging",
	});
}

export default Component;
