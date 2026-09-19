import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acz7xhb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acz7xhb1h"/>`,
		"fallback": "heroicons-outline:arrow-up-on-square",
	});
}

export default Component;
