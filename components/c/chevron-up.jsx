import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh4l9jb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh4l9jb4s"/>`,
		"fallback": "hugeicons:chevron-up",
	});
}

export default Component;
