import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po3vl1blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po3vl1blt"/>`,
		"fallback": "thesvg-color:dtube",
	});
}

export default Component;
