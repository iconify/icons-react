import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_5ziluza.css';
import '../../css/x/xi4gy0bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_5ziluza"/><path class="xi4gy0bjp"/>`,
		"fallback": "mingcute:homepod-line",
	});
}

export default Component;
