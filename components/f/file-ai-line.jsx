import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iggmv2kty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iggmv2kty"/>`,
		"fallback": "mingcute:file-ai-line",
	});
}

export default Component;
