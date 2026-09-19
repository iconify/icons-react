import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2x8iab1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m2x8iab1t"/>`,
		"fallback": "basil:comment-plus-solid",
	});
}

export default Component;
