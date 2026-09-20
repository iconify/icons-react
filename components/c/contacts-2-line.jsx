import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx2r51bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx2r51bif"/>`,
		"fallback": "mingcute:contacts-2-line",
	});
}

export default Component;
