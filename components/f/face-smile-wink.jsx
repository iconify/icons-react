import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnfb1u0jt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnfb1u0jt"/>`,
		"fallback": "fa6-solid:face-smile-wink",
	});
}

export default Component;
