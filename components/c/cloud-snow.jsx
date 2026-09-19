import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e14i29iin.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e14i29iin"/>`,
		"fallback": "bi:cloud-snow",
	});
}

export default Component;
