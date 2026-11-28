import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uchy9pbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uchy9pbtz"/>`,
		"fallback": "iconaut:arrow-up-circle-solid",
	});
}

export default Component;
