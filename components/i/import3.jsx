import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdbns1bsd.css';
import '../../css/q/q86jc-i-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qdbns1bsd"/><path class="q86jc-i-m"/></g>`,
		"fallback": "reicon:import3",
	});
}

export default Component;
