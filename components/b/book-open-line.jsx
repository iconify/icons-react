import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr9p9rb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr9p9rb7z"/>`,
		"fallback": "majesticons:book-open-line",
	});
}

export default Component;
