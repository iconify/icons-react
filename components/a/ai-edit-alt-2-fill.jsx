import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7gugk-gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7gugk-gy"/>`,
		"fallback": "si:ai-edit-alt-2-fill",
	});
}

export default Component;
