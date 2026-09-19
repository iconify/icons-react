import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlt5h_mac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlt5h_mac"/>`,
		"fallback": "fa6-solid:ear-listen",
	});
}

export default Component;
