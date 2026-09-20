import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sehd02_tk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sehd02_tk"/>`,
		"fallback": "selfhst:humble-bundle",
	});
}

export default Component;
