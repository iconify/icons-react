import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec180qjdm.css';

const viewBox = {"width":432,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec180qjdm"/>`,
		"fallback": "zmdi:boat",
	});
}

export default Component;
