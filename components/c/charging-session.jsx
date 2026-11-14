import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mf1qfwb3p.css';
import '../../css/c/c3ra92qkt.css';
import '../../css/q/qvpu09b-s.css';
import '../../css/r/ru3w0x1yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mf1qfwb3p"/><path class="c3ra92qkt"/><path class="qvpu09b-s"/><path class="ru3w0x1yt"/></g>`,
		"fallback": "evicons:charging-session",
	});
}

export default Component;
