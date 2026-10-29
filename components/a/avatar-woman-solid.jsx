import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8l_9bbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8l_9bbdf"/>`,
		"fallback": "withicons:avatar-woman-solid",
	});
}

export default Component;
