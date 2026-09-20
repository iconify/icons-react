import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwkhe_-2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwkhe_-2d"/>`,
		"fallback": "majesticons:add-column",
	});
}

export default Component;
