import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-a3h7qqt.css';
import '../../css/h/hxn-ecu2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-a3h7qqt"/><path class="hxn-ecu2d"/></g>`,
		"fallback": "iconoir:coins-swap",
	});
}

export default Component;
