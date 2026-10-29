import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m488g9bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m488g9bxz"/>`,
		"fallback": "withicons:fan-solid",
	});
}

export default Component;
