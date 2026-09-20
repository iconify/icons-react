import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufsx7q3kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufsx7q3kd"/>`,
		"fallback": "thesvg-color:html-academy",
	});
}

export default Component;
