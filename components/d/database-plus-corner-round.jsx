import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0nx-b4na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0nx-b4na"/>`,
		"fallback": "coolicons:database-plus-corner-round",
	});
}

export default Component;
