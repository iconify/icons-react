import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvya7xl9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvya7xl9l"/>`,
		"fallback": "ri:bnb-line",
	});
}

export default Component;
