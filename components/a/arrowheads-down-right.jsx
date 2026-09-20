import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9_cg6g2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9_cg6g2a"/>`,
		"fallback": "streamline-block:arrowheads-down-right",
	});
}

export default Component;
