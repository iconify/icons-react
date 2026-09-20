import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4xoj6q2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4xoj6q2m"/>`,
		"fallback": "simple-icons:grammarly",
	});
}

export default Component;
