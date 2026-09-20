import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrs9bx7bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrs9bx7bu"/>`,
		"fallback": "thesvg-color:artix-linux",
	});
}

export default Component;
