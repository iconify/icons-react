import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx9vchbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx9vchbxe"/>`,
		"fallback": "mingcute:bricks-fill",
	});
}

export default Component;
