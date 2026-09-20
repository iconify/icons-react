import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_ri79bak.css';
import '../../css/s/sl-mdjb1v.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_ri79bak"/><path class="sl-mdjb1v"/>`,
		"fallback": "lineicons:car-alt",
	});
}

export default Component;
