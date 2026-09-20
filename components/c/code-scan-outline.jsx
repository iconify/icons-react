import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3f0a4bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i3f0a4bci"/>`,
		"fallback": "solar:code-scan-outline",
	});
}

export default Component;
