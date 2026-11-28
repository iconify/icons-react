import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-mv1dshg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-mv1dshg"/>`,
		"fallback": "iconaut:book-solid",
	});
}

export default Component;
