import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zil8_rj-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zil8_rj-u"/>`,
		"fallback": "mdi:fridge-filled",
	});
}

export default Component;
