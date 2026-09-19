import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q20rrzbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q20rrzbfi"/>`,
		"fallback": "bitcoin-icons:arrow-down-outline",
	});
}

export default Component;
