import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emlw8mtrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emlw8mtrh"/>`,
		"fallback": "tdesign:chevron-down-circle-filled",
	});
}

export default Component;
