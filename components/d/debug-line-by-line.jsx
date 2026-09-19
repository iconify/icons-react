import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0l5uqr_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0l5uqr_q"/>`,
		"fallback": "codicon:debug-line-by-line",
	});
}

export default Component;
