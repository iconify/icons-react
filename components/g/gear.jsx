import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7etntbxa.css';
import '../../css/n/nlz711bte.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g7etntbxa"/><path class="nlz711bte"/></g>`,
		"fallback": "bi:gear",
	});
}

export default Component;
