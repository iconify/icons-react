import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvq5-lbye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvq5-lbye"/>`,
		"fallback": "vaadin:arrow-circle-up",
	});
}

export default Component;
