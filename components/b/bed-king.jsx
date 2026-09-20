import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddo390ave.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddo390ave"/>`,
		"fallback": "mdi:bed-king",
	});
}

export default Component;
