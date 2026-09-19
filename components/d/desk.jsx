import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7s00cewr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7s00cewr"/>`,
		"fallback": "boxicons:desk",
	});
}

export default Component;
