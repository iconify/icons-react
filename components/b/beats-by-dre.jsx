import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utyrl0b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utyrl0b0c"/>`,
		"fallback": "thesvg-color:beats-by-dre",
	});
}

export default Component;
