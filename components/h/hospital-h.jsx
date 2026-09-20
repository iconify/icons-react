import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byem0y19c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byem0y19c"/>`,
		"fallback": "pinhead:hospital-h",
	});
}

export default Component;
