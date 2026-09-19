import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhouzo_0g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhouzo_0g"/>`,
		"fallback": "carbon:incomplete-warning",
	});
}

export default Component;
