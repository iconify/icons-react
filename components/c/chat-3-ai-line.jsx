import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2o6fw_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2o6fw_z"/>`,
		"fallback": "mingcute:chat-3-ai-line",
	});
}

export default Component;
