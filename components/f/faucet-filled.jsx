import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6a4xtm3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6a4xtm3k"/>`,
		"fallback": "bitcoin-icons:faucet-filled",
	});
}

export default Component;
