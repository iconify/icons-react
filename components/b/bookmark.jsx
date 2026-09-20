import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu7zv7b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu7zv7b6f"/>`,
		"fallback": "mdi-light:bookmark",
	});
}

export default Component;
