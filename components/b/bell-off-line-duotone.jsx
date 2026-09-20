import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxfji9bbi.css';
import '../../css/e/en3s59fdz.css';
import '../../css/a/auo4b95kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zxfji9bbi"/><path class="en3s59fdz"/><path class="auo4b95kq"/></g>`,
		"fallback": "solar:bell-off-line-duotone",
	});
}

export default Component;
