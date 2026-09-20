import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u00wypjwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u00wypjwj"/>`,
		"fallback": "streamline-block:arrowheads-up-left-chevron",
	});
}

export default Component;
