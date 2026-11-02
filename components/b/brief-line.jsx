import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whx59cbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whx59cbzv"/>`,
		"fallback": "mingcute:brief-line",
	});
}

export default Component;
