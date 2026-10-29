import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpa4a0bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpa4a0bsg"/>`,
		"fallback": "withicons:arrow-up-right-solid",
	});
}

export default Component;
