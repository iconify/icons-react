import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb45w1b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb45w1b4j"/>`,
		"fallback": "heroicons-outline:book-open",
	});
}

export default Component;
