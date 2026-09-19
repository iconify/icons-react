import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/irqzpqdrr.css';
import '../../css/m/mp0ebab0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="irqzpqdrr"/><path class="mp0ebab0g"/></g>`,
		"fallback": "iconoir:home-hospital",
	});
}

export default Component;
