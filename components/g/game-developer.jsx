import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy32t8f8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy32t8f8c"/>`,
		"fallback": "thesvg:game-developer",
	});
}

export default Component;
