import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qd841cc0d.css';
import '../../css/w/w-mrtkb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qd841cc0d"/><path class="w-mrtkb-g"/></g>`,
		"fallback": "iconoir:align-left-box-solid",
	});
}

export default Component;
