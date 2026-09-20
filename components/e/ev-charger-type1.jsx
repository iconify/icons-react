import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr6iflb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr6iflb-e"/>`,
		"fallback": "mdi:ev-charger-type1",
	});
}

export default Component;
