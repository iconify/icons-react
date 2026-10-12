import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnhz2ikjq.css';
import '../../css/w/wd_x4i40e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnhz2ikjq"/><path class="wd_x4i40e"/>`,
		"fallback": "lucide-extended:calendar-fold-filled",
	});
}

export default Component;
