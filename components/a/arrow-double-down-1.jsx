import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3kl4lbok.css';
import '../../css/x/xxvwfobqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t3kl4lbok"/><path class="xxvwfobqh"/></g>`,
		"fallback": "streamline-ultimate:arrow-double-down-1",
	});
}

export default Component;
