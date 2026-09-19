import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydhuy7bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydhuy7bff"/>`,
		"fallback": "griddy-icons:chart-donut",
	});
}

export default Component;
