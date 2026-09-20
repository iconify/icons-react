import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhp64zbzw.css';
import '../../css/c/cagr_ndqq.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhp64zbzw"/><path class="cagr_ndqq"/>`,
		"fallback": "lineicons:bus",
	});
}

export default Component;
