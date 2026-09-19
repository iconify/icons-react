import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2awwsbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w2awwsbjk"/>`,
		"fallback": "gg:arrow-long-up-r",
	});
}

export default Component;
