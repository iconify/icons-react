import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sog00tb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sog00tb5e"/>`,
		"fallback": "uil:dollar-sign",
	});
}

export default Component;
