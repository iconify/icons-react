import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-kgrhb0e.css';
import '../../css/s/s4yvy-5kt.css';
import '../../css/p/ptl4ptbdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-kgrhb0e"/><path class="s4yvy-5kt"/><path class="ptl4ptbdc"/>`,
		"fallback": "ion:bug-outline",
	});
}

export default Component;
