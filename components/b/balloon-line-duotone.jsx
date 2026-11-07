import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sxio5cbij.css';
import '../../css/a/a0ykk1jag.css';
import '../../css/z/z9r7w0b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sxio5cbij"/><path class="a0ykk1jag"/><path class="z9r7w0b0c"/></g>`,
		"fallback": "solar:balloon-line-duotone",
	});
}

export default Component;
