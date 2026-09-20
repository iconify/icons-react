import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw0a3jpgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw0a3jpgs"/>`,
		"fallback": "mingcute:aerial-lift-line",
	});
}

export default Component;
