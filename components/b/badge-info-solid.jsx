import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8muh1b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8muh1b8z"/>`,
		"fallback": "withicons:badge-info-solid",
	});
}

export default Component;
