import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gpk041btf.css';
import '../../css/c/cfvh-wbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="gpk041btf"/><path class="cfvh-wbvf"/></g>`,
		"fallback": "reicon:clipboard-close",
	});
}

export default Component;
