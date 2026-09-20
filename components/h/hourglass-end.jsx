import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acy5gvbto.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acy5gvbto"/>`,
		"fallback": "vaadin:hourglass-end",
	});
}

export default Component;
