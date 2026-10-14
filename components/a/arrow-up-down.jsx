import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/l57wy0kfr.css';
import '../../css/c/cu9koeb2c.css';
import '../../css/x/xw25sib4s.css';
import '../../css/e/e-lejwb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="l57wy0kfr"/><path class="cu9koeb2c"/><path class="xw25sib4s"/><path class="e-lejwb-a"/></g>`,
		"fallback": "matita:arrow-up-down",
	});
}

export default Component;
