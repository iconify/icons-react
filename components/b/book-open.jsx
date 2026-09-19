import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edtsal6eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edtsal6eu"/>`,
		"fallback": "boxicons:book-open",
	});
}

export default Component;
