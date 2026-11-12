import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa68hvfck.css';
import '../../css/x/xqp0ub7in.css';
import '../../css/t/ttzld_7nf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa68hvfck"/><path class="xqp0ub7in"/><path class="ttzld_7nf"/>`,
		"fallback": "selfhst:dbackup-dark",
	});
}

export default Component;
