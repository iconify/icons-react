import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yubdtabdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yubdtabdg"/>`,
		"fallback": "mingcute:arrows-up-from-line-line",
	});
}

export default Component;
