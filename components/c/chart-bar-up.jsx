import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh2x5dbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh2x5dbjm"/>`,
		"fallback": "griddy-icons:chart-bar-up",
	});
}

export default Component;
