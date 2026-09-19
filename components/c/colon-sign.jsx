import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0epiibab.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0epiibab"/>`,
		"fallback": "fa7-solid:colon-sign",
	});
}

export default Component;
