import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b30n3eb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b30n3eb1c"/>`,
		"fallback": "bx:bxs-message-edit",
	});
}

export default Component;
