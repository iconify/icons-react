import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdq2xjgfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdq2xjgfo"/>`,
		"fallback": "tabler:building-star",
	});
}

export default Component;
