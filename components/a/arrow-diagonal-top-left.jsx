import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm_c2mbqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm_c2mbqm"/>`,
		"fallback": "ix:arrow-diagonal-top-left",
	});
}

export default Component;
