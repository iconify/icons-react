import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9gx19_go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9gx19_go"/>`,
		"fallback": "qlementine-icons:bookmark-24",
	});
}

export default Component;
