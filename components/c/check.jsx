import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxr9epwfz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxr9epwfz"/>`,
		"fallback": "fa6-solid:check",
	});
}

export default Component;
