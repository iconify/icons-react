import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odvk9h54r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="odvk9h54r"/>`,
		"fallback": "reicon:earbuds",
	});
}

export default Component;
