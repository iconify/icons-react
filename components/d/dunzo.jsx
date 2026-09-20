import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4a0k1k5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4a0k1k5z"/>`,
		"fallback": "thesvg-color:dunzo",
	});
}

export default Component;
