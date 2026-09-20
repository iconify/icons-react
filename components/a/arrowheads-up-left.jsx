import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ephu2zv0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ephu2zv0o"/>`,
		"fallback": "streamline-block:arrowheads-up-left",
	});
}

export default Component;
