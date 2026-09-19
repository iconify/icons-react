import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-zhcrggc.css';
import '../../css/f/f3cvqbgrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-zhcrggc"/><path class="f3cvqbgrx"/></g>`,
		"fallback": "iconoir:coin-slash",
	});
}

export default Component;
