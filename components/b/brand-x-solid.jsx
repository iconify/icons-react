import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u41y04bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u41y04bje"/>`,
		"fallback": "mynaui:brand-x-solid",
	});
}

export default Component;
