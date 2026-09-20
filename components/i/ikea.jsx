import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqmqz7b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqmqz7b3t"/>`,
		"fallback": "thesvg-color:ikea",
	});
}

export default Component;
