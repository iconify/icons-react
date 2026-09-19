import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_3m48bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_3m48bsi"/>`,
		"fallback": "bitcoin-icons:bitty-filled",
	});
}

export default Component;
