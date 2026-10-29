import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwmihpx1r.css';
import '../../css/j/jtl6p1bbt.css';
import '../../css/j/j-5m3q74g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwmihpx1r wm-shadow"/><path class="jtl6p1bbt wm-k"/><path class="j-5m3q74g wm-k"/>`,
		"fallback": "withicons-pastel:align-right",
	});
}

export default Component;
