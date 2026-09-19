import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rhte06buz.css';
import '../../css/c/cvi76znce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rhte06buz"/><path class="cvi76znce"/></g>`,
		"fallback": "hugeicons:copy-plus",
	});
}

export default Component;
