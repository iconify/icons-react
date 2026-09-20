import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhxqgv93k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhxqgv93k"/>`,
		"fallback": "uil:comment-alt-question",
	});
}

export default Component;
