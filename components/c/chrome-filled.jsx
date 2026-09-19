import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihyhuvqln.css';
import '../../css/s/squpyke4y.css';
import '../../css/e/enxx11bvx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihyhuvqln"/><path class="squpyke4y"/><path class="enxx11bvx"/>`,
		"fallback": "ep:chrome-filled",
	});
}

export default Component;
