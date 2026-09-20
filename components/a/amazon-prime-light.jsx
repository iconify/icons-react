import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffx3t1d0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffx3t1d0j"/>`,
		"fallback": "selfhst:amazon-prime-light",
	});
}

export default Component;
