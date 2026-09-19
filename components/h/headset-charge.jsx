import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/inkjmjhqc.css';
import '../../css/y/yiov8cc-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="inkjmjhqc"/><path class="yiov8cc-d"/></g>`,
		"fallback": "iconoir:headset-charge",
	});
}

export default Component;
