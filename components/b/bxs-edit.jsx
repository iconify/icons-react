import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8iq1nhqs.css';
import '../../css/u/upas56-sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8iq1nhqs"/><path class="upas56-sd"/>`,
		"fallback": "bx:bxs-edit",
	});
}

export default Component;
