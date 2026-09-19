import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz92fdcew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz92fdcew"/>`,
		"fallback": "bx:bxs-game",
	});
}

export default Component;
