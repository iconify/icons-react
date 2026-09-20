import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnyxq8n6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnyxq8n6t"/>`,
		"fallback": "mingcute:hair-fill",
	});
}

export default Component;
