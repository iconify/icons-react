import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3r8h6w8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3r8h6w8z"/>`,
		"fallback": "mdi:elevator-passenger-off",
	});
}

export default Component;
