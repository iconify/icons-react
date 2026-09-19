import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhk-rd3yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhk-rd3yo"/>`,
		"fallback": "hugeicons:bookshelf-03",
	});
}

export default Component;
