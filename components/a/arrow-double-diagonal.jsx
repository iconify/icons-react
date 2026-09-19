import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7lop2boe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7lop2boe"/>`,
		"fallback": "at-icons:arrow-double-diagonal",
	});
}

export default Component;
