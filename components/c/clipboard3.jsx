import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u1ex0txtl.css';
import '../../css/a/ap3bxh-bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u1ex0txtl"/><path class="ap3bxh-bc"/></g>`,
		"fallback": "reicon:clipboard3",
	});
}

export default Component;
