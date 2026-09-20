import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwj8wlbxf.css';
import '../../css/r/r-qn66hjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rwj8wlbxf"/><path class="r-qn66hjt"/></g>`,
		"fallback": "majesticons:burger-line",
	});
}

export default Component;
