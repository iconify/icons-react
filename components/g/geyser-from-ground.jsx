import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bimt6g92e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bimt6g92e"/>`,
		"fallback": "pinhead:geyser-from-ground",
	});
}

export default Component;
