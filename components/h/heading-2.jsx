import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irgq9rb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irgq9rb1q"/>`,
		"fallback": "lucide:heading-2",
	});
}

export default Component;
