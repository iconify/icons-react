import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao9aj2b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ao9aj2b6k"/>`,
		"fallback": "solar:bowling-bold",
	});
}

export default Component;
