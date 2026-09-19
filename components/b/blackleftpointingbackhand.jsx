import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmwxz0b1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmwxz0b1t"/>`,
		"fallback": "fxemoji:blackleftpointingbackhand",
	});
}

export default Component;
