import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gax5z8n5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gax5z8n5i"/>`,
		"fallback": "streamline-block:arrowheads-down-chevron-circle",
	});
}

export default Component;
