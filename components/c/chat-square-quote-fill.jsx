import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebl_hvbvw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebl_hvbvw"/>`,
		"fallback": "bi:chat-square-quote-fill",
	});
}

export default Component;
