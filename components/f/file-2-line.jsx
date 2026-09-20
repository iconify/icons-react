import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf4yk0big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf4yk0big"/>`,
		"fallback": "ri:file-2-line",
	});
}

export default Component;
