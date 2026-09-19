import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0scw1b5t.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0scw1b5t"/>`,
		"fallback": "formkit:heart",
	});
}

export default Component;
