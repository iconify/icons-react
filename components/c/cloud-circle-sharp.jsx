import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4w4jbcyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4w4jbcyj"/>`,
		"fallback": "ion:cloud-circle-sharp",
	});
}

export default Component;
