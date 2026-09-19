import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezis7kbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezis7kbcs"/>`,
		"fallback": "fontisto:angle-down",
	});
}

export default Component;
