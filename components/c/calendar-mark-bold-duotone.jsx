import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnf9-xb3q.css';
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
		"content": `<path class="xnf9-xb3q"/><path class="j6xrxv6-w"/><path class="zw-s4mi4u"/>`,
		"fallback": "solar:calendar-mark-bold-duotone",
	});
}

export default Component;
