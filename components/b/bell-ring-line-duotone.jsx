import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxfji9bbi.css';
import '../../css/a/auo4b95kq.css';
import '../../css/r/rqjgp5nfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zxfji9bbi"/><path class="auo4b95kq"/><path class="rqjgp5nfb"/></g>`,
		"fallback": "solar:bell-ring-line-duotone",
	});
}

export default Component;
