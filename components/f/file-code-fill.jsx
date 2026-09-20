import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye4aqbkod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye4aqbkod"/>`,
		"fallback": "mingcute:file-code-fill",
	});
}

export default Component;
