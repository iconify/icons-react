import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-z7kfb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-z7kfb8s"/>`,
		"fallback": "coolicons:chevron-left-bulk-round",
	});
}

export default Component;
