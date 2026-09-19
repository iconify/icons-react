import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqydb2b1p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqydb2b1p"/>`,
		"fallback": "garden:file-spreadsheet-stroke-16",
	});
}

export default Component;
