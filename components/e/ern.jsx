import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aid4a4bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aid4a4bsa"/>`,
		"fallback": "token:ern",
	});
}

export default Component;
