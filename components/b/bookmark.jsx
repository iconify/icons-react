import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h36y6dxnk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h36y6dxnk"/>`,
		"fallback": "pajamas:bookmark",
	});
}

export default Component;
