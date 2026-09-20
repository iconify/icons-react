import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u75qp8b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u75qp8b1l"/>`,
		"fallback": "keyline-icons:git-x",
	});
}

export default Component;
