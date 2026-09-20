import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd_610ovi.css';
import '../../css/r/r0k4s_6cx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd_610ovi"/><path class="r0k4s_6cx"/>`,
		"fallback": "selfhst:hhf-technology",
	});
}

export default Component;
