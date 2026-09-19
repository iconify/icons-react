import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlbusqb_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlbusqb_s"/>`,
		"fallback": "fa6-solid:arrows-rotate",
	});
}

export default Component;
