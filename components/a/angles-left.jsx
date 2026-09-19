import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl_q0b82j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl_q0b82j"/>`,
		"fallback": "fa6-solid:angles-left",
	});
}

export default Component;
