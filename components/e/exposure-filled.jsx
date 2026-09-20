import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd3w86b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd3w86b6b"/>`,
		"fallback": "tdesign:exposure-filled",
	});
}

export default Component;
