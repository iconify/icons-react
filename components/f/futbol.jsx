import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip49gjb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip49gjb_v"/>`,
		"fallback": "fa6-regular:futbol",
	});
}

export default Component;
