import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gedt4o8uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gedt4o8uh"/>`,
		"fallback": "mingcute:align-arrow-left-line",
	});
}

export default Component;
