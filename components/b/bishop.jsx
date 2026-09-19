import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktm36pb_d.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktm36pb_d"/>`,
		"fallback": "whh:bishop",
	});
}

export default Component;
