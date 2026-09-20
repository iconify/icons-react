import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5kqz9n5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5kqz9n5i"/>`,
		"fallback": "mdi:crown-circle-outline",
	});
}

export default Component;
