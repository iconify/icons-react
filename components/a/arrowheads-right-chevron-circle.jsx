import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh3jj2bim.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yh3jj2bim"/>`,
		"fallback": "streamline-block:arrowheads-right-chevron-circle",
	});
}

export default Component;
