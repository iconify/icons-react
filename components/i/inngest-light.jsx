import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhuwacq1e.css';

const viewBox = {"width":100,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nhuwacq1e"/>`,
		"fallback": "thesvg-color:inngest-light",
	});
}

export default Component;
