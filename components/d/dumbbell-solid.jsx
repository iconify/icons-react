import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le-25ab2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le-25ab2z"/>`,
		"fallback": "withicons:dumbbell-solid",
	});
}

export default Component;
