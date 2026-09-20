import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mq8ul-5qi.css';
import '../../css/t/t4-ohwb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path clip-rule="evenodd" class="mq8ul-5qi"/><path class="t4-ohwb_j"/></g>`,
		"fallback": "streamline-logos:analogue-logo",
	});
}

export default Component;
