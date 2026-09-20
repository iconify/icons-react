import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x41uaybbc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x41uaybbc"/>`,
		"fallback": "streamline-block:arrowheads-down-left-chevron",
	});
}

export default Component;
