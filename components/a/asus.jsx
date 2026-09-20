import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vir9iiboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vir9iiboj"/>`,
		"fallback": "thesvg-color:asus",
	});
}

export default Component;
