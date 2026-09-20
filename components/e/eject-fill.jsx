import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oymcw6l2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oymcw6l2q"/>`,
		"fallback": "ri:eject-fill",
	});
}

export default Component;
