import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an_xzjbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an_xzjbmz"/>`,
		"fallback": "thesvg-color:element",
	});
}

export default Component;
