import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr3r1xpmt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr3r1xpmt"/>`,
		"fallback": "bi:file-spreadsheet",
	});
}

export default Component;
