import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmti_bc9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmti_bc9u"/>`,
		"fallback": "maki:cemetery-15",
	});
}

export default Component;
