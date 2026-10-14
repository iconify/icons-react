import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czzl2nbyk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czzl2nbyk"/>`,
		"fallback": "octicon:graph-bar-horizontal-16",
	});
}

export default Component;
