import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgt19h77j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgt19h77j"/>`,
		"fallback": "thesvg-color:fonoma",
	});
}

export default Component;
