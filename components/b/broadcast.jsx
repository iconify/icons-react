import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/midos5b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="midos5b3e"/>`,
		"fallback": "mdi:broadcast",
	});
}

export default Component;
