import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwjpuk8ud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwjpuk8ud"/>`,
		"fallback": "fa6-solid:cube",
	});
}

export default Component;
