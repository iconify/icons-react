import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfnh49bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfnh49bcn"/>`,
		"fallback": "mdi:alphabet-b-circle",
	});
}

export default Component;
