import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn5z01lzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn5z01lzv"/>`,
		"fallback": "uil:folder-times",
	});
}

export default Component;
