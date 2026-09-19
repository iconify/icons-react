import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7saf9b9f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7saf9b9f"/>`,
		"fallback": "garden:clipboard-blank-stroke-12",
	});
}

export default Component;
