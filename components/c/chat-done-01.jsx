import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qvno_evfq.css';
import '../../css/a/aqd-nhlay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qvno_evfq"/><path class="aqd-nhlay"/></g>`,
		"fallback": "hugeicons:chat-done-01",
	});
}

export default Component;
