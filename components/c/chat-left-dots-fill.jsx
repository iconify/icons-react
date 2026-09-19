import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au_he4sgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au_he4sgw"/>`,
		"fallback": "bi:chat-left-dots-fill",
	});
}

export default Component;
