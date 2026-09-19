import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_8ll006d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_8ll006d"/>`,
		"fallback": "ion:chatbox-working",
	});
}

export default Component;
