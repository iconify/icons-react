import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy_rrbc-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy_rrbc-e"/>`,
		"fallback": "cryptocurrency:hot",
	});
}

export default Component;
