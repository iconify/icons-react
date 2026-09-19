import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if8gn2bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if8gn2bij"/>`,
		"fallback": "bitcoin-icons:caret-up-outline",
	});
}

export default Component;
