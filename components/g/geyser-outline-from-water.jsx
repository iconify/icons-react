import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfjr1obov.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfjr1obov"/>`,
		"fallback": "pinhead:geyser-outline-from-water",
	});
}

export default Component;
