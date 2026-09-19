import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfdj0-b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfdj0-b0g"/>`,
		"fallback": "bx:bxs-dice-3",
	});
}

export default Component;
