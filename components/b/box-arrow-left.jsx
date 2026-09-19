import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qef6nwkbg.css';
import '../../css/k/k-v4ombfc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qef6nwkbg"/><path class="k-v4ombfc"/></g>`,
		"fallback": "bi:box-arrow-left",
	});
}

export default Component;
