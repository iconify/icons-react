import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl4bf3bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl4bf3bym"/>`,
		"fallback": "bitcoin-icons:brush-filled",
	});
}

export default Component;
