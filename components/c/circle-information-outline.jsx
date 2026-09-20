import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhzasm3by.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhzasm3by"/>`,
		"fallback": "lsicon:circle-information-outline",
	});
}

export default Component;
