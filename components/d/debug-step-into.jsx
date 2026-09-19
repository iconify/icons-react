import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk7dkdbsr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk7dkdbsr"/>`,
		"fallback": "codicon:debug-step-into",
	});
}

export default Component;
