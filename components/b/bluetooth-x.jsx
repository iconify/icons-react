import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt7c_7kbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt7c_7kbp"/>`,
		"fallback": "noviair-light:bluetooth-x",
	});
}

export default Component;
