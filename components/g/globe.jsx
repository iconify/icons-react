import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sydt2ty0f.css';

const viewBox = {"width":432,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sydt2ty0f"/>`,
		"fallback": "ps:globe",
	});
}

export default Component;
