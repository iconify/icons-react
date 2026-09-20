import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsyuo0y3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsyuo0y3m"/>`,
		"fallback": "uil:arrow-up-left",
	});
}

export default Component;
