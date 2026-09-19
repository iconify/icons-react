import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl_0t8b8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl_0t8b8c"/>`,
		"fallback": "cryptocurrency:bsv",
	});
}

export default Component;
