import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_cu8y8xa.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_cu8y8xa"/>`,
		"fallback": "jam:eggs-f",
	});
}

export default Component;
