import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmt358bze.css';
import '../../css/d/dre6y_9-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmt358bze"/><path class="dre6y_9-i"/>`,
		"fallback": "solar:diskette-bold",
	});
}

export default Component;
