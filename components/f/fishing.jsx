import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex34cxbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex34cxbep"/>`,
		"fallback": "mdi:fishing",
	});
}

export default Component;
