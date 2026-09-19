import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgywio29h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgywio29h"/>`,
		"fallback": "bx:bxs-book-bookmark",
	});
}

export default Component;
