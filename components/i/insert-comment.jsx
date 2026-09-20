import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfkcblbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfkcblbva"/>`,
		"fallback": "mdi:insert-comment",
	});
}

export default Component;
