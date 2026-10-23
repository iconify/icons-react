import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxuli2byx.css';
import '../../css/p/py4_t0ekw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nxuli2byx"/><path class="py4_t0ekw"/></g>`,
		"fallback": "vadivam:clipboard-copy",
	});
}

export default Component;
