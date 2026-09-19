import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/klebjebfq.css';
import '../../css/s/s2fa1xbkc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="klebjebfq"/><path class="s2fa1xbkc"/></g>`,
		"fallback": "garden:eye-stroke-12",
	});
}

export default Component;
