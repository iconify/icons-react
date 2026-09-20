import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5nrp29qc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5nrp29qc"/>`,
		"fallback": "pinhead:checkered-flag-on-flag-handle",
	});
}

export default Component;
