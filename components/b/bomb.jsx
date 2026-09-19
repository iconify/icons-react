import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1sl6ucef.css';
import '../../css/h/hajrmjvuo.css';
import '../../css/o/o8sexzb6d.css';
import '../../css/n/n6a3hv_ac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1sl6ucef"/><path class="hajrmjvuo"/><path class="o8sexzb6d"/><ellipse transform="rotate(156.273 138.27 186.36)" class="n6a3hv_ac"/>`,
		"fallback": "fxemoji:bomb",
	});
}

export default Component;
