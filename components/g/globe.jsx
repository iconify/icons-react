import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czg1q2ikv.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czg1q2ikv"/>`,
		"fallback": "fa:globe",
	});
}

export default Component;
