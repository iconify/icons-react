import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar2wz1o0x.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar2wz1o0x"/>`,
		"fallback": "maki:bus-11",
	});
}

export default Component;
