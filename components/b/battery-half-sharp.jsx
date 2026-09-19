import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt57vq-0m.css';
import '../../css/i/iorf33r0u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt57vq-0m"/><path class="iorf33r0u"/>`,
		"fallback": "ion:battery-half-sharp",
	});
}

export default Component;
