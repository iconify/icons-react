import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ph3kch2zm.css';
import '../../css/x/xu3g27b7k.css';
import '../../css/t/tq0y-p-0s.css';
import '../../css/a/ajqhpcbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ph3kch2zm"/><path class="xu3g27b7k"/><path class="tq0y-p-0s"/><path class="ajqhpcbca"/></g>`,
		"fallback": "reicon:calendar-tick",
	});
}

export default Component;
