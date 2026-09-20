import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiq-yuotc.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiq-yuotc"/>`,
		"fallback": "iwwa:arrow-up",
	});
}

export default Component;
