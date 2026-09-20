import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx8ltgbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dx8ltgbmq"/>`,
		"fallback": "streamline-ultimate:hierarchy-5-organize-bold",
	});
}

export default Component;
