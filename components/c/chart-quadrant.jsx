import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8chi8vcx.css';
import '../../css/r/rsx-5p5ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y8chi8vcx"/><path class="rsx-5p5ch"/></g>`,
		"fallback": "andrsrxn:chart-quadrant",
	});
}

export default Component;
