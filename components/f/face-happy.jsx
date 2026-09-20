import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-72742ye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-72742ye"/>`,
		"fallback": "oui:face-happy",
	});
}

export default Component;
