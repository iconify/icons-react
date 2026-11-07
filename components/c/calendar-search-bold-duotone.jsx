import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm_gscbzc.css';
import '../../css/j/j6xrxv6-w.css';
import '../../css/z/zw-s4mi4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wm_gscbzc"/><path class="j6xrxv6-w"/><path class="zw-s4mi4u"/>`,
		"fallback": "solar:calendar-search-bold-duotone",
	});
}

export default Component;
