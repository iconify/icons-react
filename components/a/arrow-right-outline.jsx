import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q20ot-b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q20ot-b8d"/>`,
		"fallback": "bitcoin-icons:arrow-right-outline",
	});
}

export default Component;
