import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lyard7xsu.css';
import '../../css/k/kp002wbny.css';
import '../../css/v/vupfj4bbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="lyard7xsu"/><path class="kp002wbny"/><path class="vupfj4bbw"/></g>`,
		"fallback": "icon-park:grid-two",
	});
}

export default Component;
