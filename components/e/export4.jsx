import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdbns1bsd.css';
import '../../css/a/ap3ponbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qdbns1bsd"/><path class="ap3ponbex"/></g>`,
		"fallback": "reicon:export4",
	});
}

export default Component;
