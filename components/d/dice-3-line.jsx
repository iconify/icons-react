import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5fnoe3le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5fnoe3le"/>`,
		"fallback": "ri:dice-3-line",
	});
}

export default Component;
