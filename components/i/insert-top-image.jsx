import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krdf7zkuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krdf7zkuq"/>`,
		"fallback": "hugeicons:insert-top-image",
	});
}

export default Component;
