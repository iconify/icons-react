import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl48nf4cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl48nf4cu"/>`,
		"fallback": "bitcoin-icons:confirmations-0-outline",
	});
}

export default Component;
