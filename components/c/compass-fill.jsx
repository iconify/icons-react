import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixyad6b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixyad6b1w"/>`,
		"fallback": "keyline-icons:compass-fill",
	});
}

export default Component;
