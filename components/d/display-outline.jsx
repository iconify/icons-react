import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q09t21ylq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q09t21ylq"/>`,
		"fallback": "solar:display-outline",
	});
}

export default Component;
