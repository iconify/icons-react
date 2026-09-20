import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuw7zub5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuw7zub5q"/>`,
		"fallback": "nrk:arrow-left-expressive",
	});
}

export default Component;
