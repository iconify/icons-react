import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke8545akz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ke8545akz"/>`,
		"fallback": "streamline-block:arrowheads-down-left",
	});
}

export default Component;
