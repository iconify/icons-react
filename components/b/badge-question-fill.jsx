import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muhx-4g7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="muhx-4g7r"/>`,
		"fallback": "keyline-icons:badge-question-fill",
	});
}

export default Component;
