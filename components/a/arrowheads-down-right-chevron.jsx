import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn9c1cdua.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dn9c1cdua"/>`,
		"fallback": "streamline-block:arrowheads-down-right-chevron",
	});
}

export default Component;
