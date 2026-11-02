import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2f0ueaeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2f0ueaeo"/>`,
		"fallback": "mingcute:back-2-line",
	});
}

export default Component;
