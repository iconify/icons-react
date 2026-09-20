import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w5h7ldmyk.css';
import '../../css/h/hr77xby-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w5h7ldmyk"/><path class="hr77xby-x"/></g>`,
		"fallback": "mynaui:git-pull-request",
	});
}

export default Component;
