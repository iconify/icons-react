import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgjv05bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgjv05bkw"/>`,
		"fallback": "mdi:format-text-rotation-down",
	});
}

export default Component;
