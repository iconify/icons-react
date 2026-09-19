import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2l3pabim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2l3pabim"/>`,
		"fallback": "file-icons:bro",
	});
}

export default Component;
