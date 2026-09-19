import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bzalpzb0t.css';
import '../../css/z/zh3wrzwfv.css';
import '../../css/a/aixh0kbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bzalpzb0t"/><path class="zh3wrzwfv"/><path class="aixh0kbge"/></g>`,
		"fallback": "hugeicons:biscuit",
	});
}

export default Component;
