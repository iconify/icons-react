import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wenjm8pzd.css';
import '../../css/q/qbrh19bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wenjm8pzd"/><path class="qbrh19bhr"/></g>`,
		"fallback": "andrsrxn:currency-swap",
	});
}

export default Component;
