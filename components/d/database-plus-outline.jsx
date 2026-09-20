import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfoa199gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfoa199gs"/>`,
		"fallback": "mdi:database-plus-outline",
	});
}

export default Component;
