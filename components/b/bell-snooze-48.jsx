import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hosli1blv.css';
import '../../css/u/uoh_r3_bx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hosli1blv"/><path class="uoh_r3_bx"/>`,
		"fallback": "energy-icons:bell-snooze-48",
	});
}

export default Component;
