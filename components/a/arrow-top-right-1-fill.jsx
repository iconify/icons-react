import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htlt118tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="htlt118tv"/>`,
		"fallback": "iconamoon:arrow-top-right-1-fill",
	});
}

export default Component;
