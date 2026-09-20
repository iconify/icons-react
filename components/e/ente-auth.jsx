import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myho6vbhx.css';
import '../../css/w/wjec4ccki.css';
import '../../css/e/e8l5ttbgc.css';
import '../../css/f/f4v5ozrge.css';
import '../../css/w/ww1b_qbtj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myho6vbhx"/><path class="wjec4ccki"/><path class="e8l5ttbgc"/><path class="f4v5ozrge"/><path class="ww1b_qbtj"/>`,
		"fallback": "selfhst:ente-auth",
	});
}

export default Component;
