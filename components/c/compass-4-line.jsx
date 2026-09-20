import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0qdpbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0qdpbcd"/>`,
		"fallback": "ri:compass-4-line",
	});
}

export default Component;
