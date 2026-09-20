import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_v0keb0x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_v0keb0x"/>`,
		"fallback": "oi:arrow-thick-top",
	});
}

export default Component;
