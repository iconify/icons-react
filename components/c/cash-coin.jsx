import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xqe965b4u.css';
import '../../css/z/zb_aymonx.css';
import '../../css/s/s1o7x1bnh.css';
import '../../css/x/x1ujkbcam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xqe965b4u"/><path class="zb_aymonx"/><path class="s1o7x1bnh"/><path class="x1ujkbcam"/></g>`,
		"fallback": "tabler:cash-coin",
	});
}

export default Component;
