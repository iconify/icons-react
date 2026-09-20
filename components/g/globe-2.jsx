import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw3eezbwo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw3eezbwo"/>`,
		"fallback": "radix-icons:globe-2",
	});
}

export default Component;
