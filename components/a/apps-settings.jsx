import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woztp5_3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woztp5_3b"/>`,
		"fallback": "cil:apps-settings",
	});
}

export default Component;
