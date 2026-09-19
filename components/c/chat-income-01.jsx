import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/akc4ntbyu.css';
import '../../css/j/ji5w_2b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="akc4ntbyu"/><path class="ji5w_2b3h"/></g>`,
		"fallback": "hugeicons:chat-income-01",
	});
}

export default Component;
