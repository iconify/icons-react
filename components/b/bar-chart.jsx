import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc5e8lyyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc5e8lyyf"/>`,
		"fallback": "humbleicons:bar-chart",
	});
}

export default Component;
