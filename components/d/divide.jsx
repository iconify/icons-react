import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw2um-8au.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw2um-8au"/>`,
		"fallback": "iwwa:divide",
	});
}

export default Component;
