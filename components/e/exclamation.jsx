import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjzvy6bgo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjzvy6bgo"/>`,
		"fallback": "fa7-solid:exclamation",
	});
}

export default Component;
