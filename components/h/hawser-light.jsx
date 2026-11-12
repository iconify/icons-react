import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-2q8bc0s.css';
import '../../css/s/s4czx2bgp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-2q8bc0s"/><path class="s4czx2bgp"/>`,
		"fallback": "selfhst:hawser-light",
	});
}

export default Component;
