import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyo09cc6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyo09cc6x"/>`,
		"fallback": "hugeicons:ai-scan-text",
	});
}

export default Component;
