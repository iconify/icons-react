import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_6zlj1bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_6zlj1bf"/>`,
		"fallback": "reicon:bookmark-minus-filled",
	});
}

export default Component;
