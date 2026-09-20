import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj4m-lvhg.css';
import '../../css/a/a0xu55but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj4m-lvhg"/><path class="a0xu55but"/>`,
		"fallback": "mingcute:base-station-2-line",
	});
}

export default Component;
