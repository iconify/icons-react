import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9539sb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9539sb5r"/>`,
		"fallback": "iconaut:clipboard-solid",
	});
}

export default Component;
