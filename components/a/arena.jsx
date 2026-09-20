import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiqcs5z8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiqcs5z8r"/>`,
		"fallback": "mdi:arena",
	});
}

export default Component;
