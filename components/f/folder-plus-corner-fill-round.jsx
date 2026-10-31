import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw7rjbczd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw7rjbczd"/>`,
		"fallback": "coolicons:folder-plus-corner-fill-round",
	});
}

export default Component;
