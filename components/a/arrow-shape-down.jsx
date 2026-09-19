import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1xn9bcet.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1xn9bcet"/>`,
		"fallback": "gravity-ui:arrow-shape-down",
	});
}

export default Component;
