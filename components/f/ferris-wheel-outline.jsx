import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq_4ykvlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pq_4ykvlp"/>`,
		"fallback": "solar:ferris-wheel-outline",
	});
}

export default Component;
