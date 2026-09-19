import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4flxzymy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4flxzymy"/>`,
		"fallback": "bx:bxs-dice-1",
	});
}

export default Component;
