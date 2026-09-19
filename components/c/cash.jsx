import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fo5se2xdh.css';
import '../../css/q/q4l0-ri5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fo5se2xdh"/><path class="q4l0-ri5o"/></g>`,
		"fallback": "iconoir:cash",
	});
}

export default Component;
