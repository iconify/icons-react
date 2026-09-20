import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnyi6su0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnyi6su0z"/>`,
		"fallback": "reicon:flag4-filled",
	});
}

export default Component;
