import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v1uuu4bqy.css';
import '../../css/c/c0dbrnbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v1uuu4bqy"/><path class="c0dbrnbqp"/></g>`,
		"fallback": "hugeicons:bulletproof-vest",
	});
}

export default Component;
