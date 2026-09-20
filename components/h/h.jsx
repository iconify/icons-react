import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cswy7ackf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cswy7ackf"/>`,
		"fallback": "pinhead:h",
	});
}

export default Component;
