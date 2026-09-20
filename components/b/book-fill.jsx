import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsya23z-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsya23z-f"/>`,
		"fallback": "ri:book-fill",
	});
}

export default Component;
