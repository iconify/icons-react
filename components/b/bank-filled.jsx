import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jem20x6hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jem20x6hs"/>`,
		"fallback": "griddy-icons:bank-filled",
	});
}

export default Component;
