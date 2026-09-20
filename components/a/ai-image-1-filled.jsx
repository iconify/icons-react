import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqxnqdk_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqxnqdk_w"/>`,
		"fallback": "tdesign:ai-image-1-filled",
	});
}

export default Component;
