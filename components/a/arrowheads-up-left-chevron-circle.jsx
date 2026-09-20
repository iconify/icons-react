import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bntqr-xzn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bntqr-xzn"/>`,
		"fallback": "streamline-block:arrowheads-up-left-chevron-circle",
	});
}

export default Component;
