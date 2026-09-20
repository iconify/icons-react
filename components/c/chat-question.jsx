import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_5yx_b2v.css';
import '../../css/w/wu23-3bwn.css';
import '../../css/o/obkdnvb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h_5yx_b2v"/><path class="wu23-3bwn"/><circle class="obkdnvb0e"/></g>`,
		"fallback": "proicons:chat-question",
	});
}

export default Component;
