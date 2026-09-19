import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntm3w5bsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntm3w5bsm"/>`,
		"fallback": "fxemoji:crossmark",
	});
}

export default Component;
