import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwxc7_b3n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwxc7_b3n"/>`,
		"fallback": "selfhst:hpe-aruba-dark",
	});
}

export default Component;
