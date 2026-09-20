import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgh9gsnin.css';
import '../../css/c/ch15pybdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xgh9gsnin"/><path class="ch15pybdl"/></g>`,
		"fallback": "keyline-icons:caret-up-fill",
	});
}

export default Component;
