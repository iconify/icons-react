import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1jpfm-xo.css';
import '../../css/m/mv7ytg7oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i1jpfm-xo"/><path class="mv7ytg7oj"/></g>`,
		"fallback": "hugeicons:candy",
	});
}

export default Component;
