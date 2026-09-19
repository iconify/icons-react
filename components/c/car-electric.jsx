import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2y-q-42q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2y-q-42q"/>`,
		"fallback": "griddy-icons:car-electric",
	});
}

export default Component;
