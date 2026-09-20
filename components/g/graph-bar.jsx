import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n399bo9an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n399bo9an"/>`,
		"fallback": "uil:graph-bar",
	});
}

export default Component;
