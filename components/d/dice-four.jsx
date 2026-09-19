import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ct42dfb0y.css';
import '../../css/t/t74-dnrnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ct42dfb0y"/><path class="t74-dnrnx"/></g>`,
		"fallback": "iconoir:dice-four",
	});
}

export default Component;
