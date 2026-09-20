import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3i5eof-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3i5eof-d"/>`,
		"fallback": "tabler:cookie-man-filled",
	});
}

export default Component;
