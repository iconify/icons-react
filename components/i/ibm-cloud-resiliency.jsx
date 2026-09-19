import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrtgb7mac.css';
import '../../css/s/swkhaseke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrtgb7mac"/><path class="swkhaseke"/>`,
		"fallback": "carbon:ibm-cloud-resiliency",
	});
}

export default Component;
