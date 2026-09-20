import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7rd5pbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7rd5pbsu"/>`,
		"fallback": "ri:brackets-fill",
	});
}

export default Component;
