import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj4rddc0h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj4rddc0h"/>`,
		"fallback": "lineicons:briefcase",
	});
}

export default Component;
