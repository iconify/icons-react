import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-6f03bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-6f03bsa"/>`,
		"fallback": "reicon:hourglass2",
	});
}

export default Component;
