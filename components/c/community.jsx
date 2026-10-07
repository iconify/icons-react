import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qrrhsib-t.css';
import '../../css/z/ziro3hb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qrrhsib-t"/><path class="ziro3hb8p"/></g>`,
		"fallback": "iconoir:community",
	});
}

export default Component;
