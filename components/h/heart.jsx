import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug98l9j0s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug98l9j0s"/>`,
		"fallback": "bi:heart",
	});
}

export default Component;
