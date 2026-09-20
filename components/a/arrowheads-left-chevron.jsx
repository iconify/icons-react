import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahhxt3bgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ahhxt3bgb"/>`,
		"fallback": "streamline-block:arrowheads-left-chevron",
	});
}

export default Component;
