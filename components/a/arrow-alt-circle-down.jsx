import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuwh7k_9h.css';
import '../../css/q/qo3rhxb4p.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuwh7k_9h"/><path class="qo3rhxb4p"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:arrow-alt-circle-down",
	});
}

export default Component;
