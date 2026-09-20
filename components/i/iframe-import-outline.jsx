import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br75rmb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br75rmb1n"/>`,
		"fallback": "mdi:iframe-import-outline",
	});
}

export default Component;
