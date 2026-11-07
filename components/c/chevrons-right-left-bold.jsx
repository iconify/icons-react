import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1jlu27kk.css';
import '../../css/d/dnv52pbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1jlu27kk"/><path class="dnv52pbfo"/>`,
		"fallback": "solar:chevrons-right-left-bold",
	});
}

export default Component;
