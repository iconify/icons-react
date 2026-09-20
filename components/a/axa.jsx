import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlfw6ca1t.css';
import '../../css/h/hglx5hbva.css';
import '../../css/s/sx_i0qbyz.css';

const viewBox = {"width":28.132,"height":28.132};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlfw6ca1t"/><path class="hglx5hbva"/><path class="sx_i0qbyz"/>`,
		"fallback": "thesvg-color:axa",
	});
}

export default Component;
