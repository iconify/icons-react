import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3-vaeb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3-vaeb_w"/>`,
		"fallback": "bitcoin-icons:flip-vertical-filled",
	});
}

export default Component;
