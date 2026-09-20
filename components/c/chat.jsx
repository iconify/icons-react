import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyf535b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyf535b2t"/>`,
		"fallback": "uil:chat",
	});
}

export default Component;
