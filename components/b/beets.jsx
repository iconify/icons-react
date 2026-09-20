import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqw0fe5oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aqw0fe5oj"/>`,
		"fallback": "token:beets",
	});
}

export default Component;
