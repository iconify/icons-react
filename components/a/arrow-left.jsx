import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtsq4kr0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtsq4kr0i"/>`,
		"fallback": "lets-icons:arrow-left",
	});
}

export default Component;
