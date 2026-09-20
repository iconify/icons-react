import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj6-g_0pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj6-g_0pk"/>`,
		"fallback": "mingcute:history-2-fill",
	});
}

export default Component;
