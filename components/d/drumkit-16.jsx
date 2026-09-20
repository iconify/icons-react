import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxp_ne7lq.css';
import '../../css/i/ik8lqcbnd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxp_ne7lq"/><path clip-rule="evenodd" class="ik8lqcbnd"/>`,
		"fallback": "qlementine-icons:drumkit-16",
	});
}

export default Component;
