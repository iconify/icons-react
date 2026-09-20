import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_gt3b4pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_gt3b4pp"/>`,
		"fallback": "mingcute:cylinder-fill",
	});
}

export default Component;
