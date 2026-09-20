import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzkd7_b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzkd7_b7l"/>`,
		"fallback": "mdi:clipboard-add",
	});
}

export default Component;
