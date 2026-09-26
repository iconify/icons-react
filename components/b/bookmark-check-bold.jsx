import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6v_o1bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k6v_o1bqo"/>`,
		"fallback": "solar:bookmark-check-bold",
	});
}

export default Component;
