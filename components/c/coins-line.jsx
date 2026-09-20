import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2eb0-bwz.css';
import '../../css/s/s2ybkzuzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c2eb0-bwz"/><path class="s2ybkzuzb"/></g>`,
		"fallback": "majesticons:coins-line",
	});
}

export default Component;
