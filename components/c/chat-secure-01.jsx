import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/ja21kgjlx.css';
import '../../css/m/mh5hhwcdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ja21kgjlx"/><path class="mh5hhwcdl"/></g>`,
		"fallback": "hugeicons:chat-secure-01",
	});
}

export default Component;
