import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnf7jx1op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnf7jx1op"/>`,
		"fallback": "tabler:flag-exclamation",
	});
}

export default Component;
