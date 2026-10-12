import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zexy07btf.css';
import '../../css/g/g8x8p7bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zexy07btf"/><path class="g8x8p7bwq"/></g>`,
		"fallback": "andrsrxn:arrow-corner-right-up",
	});
}

export default Component;
