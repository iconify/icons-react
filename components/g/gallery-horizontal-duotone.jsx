import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cx6tfbb9x.css';
import '../../css/a/a04nyfbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cx6tfbb9x"/><path class="a04nyfbhi"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-duotone",
	});
}

export default Component;
