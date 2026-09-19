import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8p_cp7cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f8p_cp7cv"/>`,
		"fallback": "bitcoin-icons:caret-up-filled",
	});
}

export default Component;
