import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgb1ac0gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgb1ac0gi"/>`,
		"fallback": "iconoir:arrow-up-right-square-solid",
	});
}

export default Component;
