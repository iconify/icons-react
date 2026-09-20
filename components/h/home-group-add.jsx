import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1dp7r1mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1dp7r1mt"/>`,
		"fallback": "mdi:home-group-add",
	});
}

export default Component;
