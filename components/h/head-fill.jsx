import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ifn1ljn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u8ifn1ljn"/>`,
		"fallback": "mingcute:head-fill",
	});
}

export default Component;
