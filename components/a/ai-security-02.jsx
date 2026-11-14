import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ch-c-mbci.css';
import '../../css/j/jboz0obdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ch-c-mbci"/><path class="jboz0obdn"/></g>`,
		"fallback": "hugeicons:ai-security-02",
	});
}

export default Component;
