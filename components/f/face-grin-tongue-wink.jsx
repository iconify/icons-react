import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imf12-b_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imf12-b_j"/>`,
		"fallback": "fa6-regular:face-grin-tongue-wink",
	});
}

export default Component;
