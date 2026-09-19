import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uank-1bfn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uank-1bfn"/>`,
		"fallback": "bi:filetype-docx",
	});
}

export default Component;
