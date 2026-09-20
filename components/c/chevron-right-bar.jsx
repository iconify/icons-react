import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv7r5pu1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pv7r5pu1r"/>`,
		"fallback": "ix:chevron-right-bar",
	});
}

export default Component;
