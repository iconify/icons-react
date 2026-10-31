import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vpnx13m7x.css';
import '../../css/a/a9kyadc1z.css';
import '../../css/v/vselxpb6i.css';
import '../../css/i/i4eynmq8u.css';
import '../../css/z/zm-bw5b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vpnx13m7x wm-shadow"/><path class="a9kyadc1z wm-shadow"/><path class="vselxpb6i"/><path class="i4eynmq8u"/><path class="zm-bw5b_s"/></g>`,
		"fallback": "withicons-brutal:heart-pair",
	});
}

export default Component;
