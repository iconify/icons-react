import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaj3hvpiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaj3hvpiq"/>`,
		"fallback": "heroicons:arrow-up-right",
	});
}

export default Component;
