import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqj6vlb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqj6vlb0w"/>`,
		"fallback": "griddy-icons:cloudy",
	});
}

export default Component;
