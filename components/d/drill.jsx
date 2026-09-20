import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by8o14b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by8o14b4s"/>`,
		"fallback": "uil:drill",
	});
}

export default Component;
