import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv29pbcxa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uv29pbcxa"/>`,
		"fallback": "streamline-block:arrowheads-left-chevron-circle",
	});
}

export default Component;
