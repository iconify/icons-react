import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4i-yacpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4i-yacpe"/>`,
		"fallback": "mingcute:film-fill",
	});
}

export default Component;
