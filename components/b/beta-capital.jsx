import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bf5jahb7c.css';
import '../../css/n/n97qcj3ul.css';
import '../../css/j/jto0csbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bf5jahb7c"/><path class="n97qcj3ul"/><path class="jto0csbfb"/></g>`,
		"fallback": "matita:beta-capital",
	});
}

export default Component;
