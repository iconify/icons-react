import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2oh0-v6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2oh0-v6o"/>`,
		"fallback": "solar:arrow-right-down-outline",
	});
}

export default Component;
