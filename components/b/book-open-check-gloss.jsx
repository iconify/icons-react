import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptprdwgck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptprdwgck"/>`,
		"fallback": "withicons:book-open-check-gloss",
	});
}

export default Component;
