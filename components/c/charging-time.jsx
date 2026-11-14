import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-zk1w6vl.css';
import '../../css/j/jg6n16uty.css';
import '../../css/y/y5s1tcbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f-zk1w6vl"/><path class="jg6n16uty"/><path class="y5s1tcbbk"/></g>`,
		"fallback": "evicons:charging-time",
	});
}

export default Component;
