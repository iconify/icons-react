import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_o28ccpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_o28ccpd"/>`,
		"fallback": "mingcute:hashtag-fill",
	});
}

export default Component;
