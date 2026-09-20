import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rd5nmc_xa.css';
import '../../css/a/a32rvzbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rd5nmc_xa"/><path class="a32rvzbom"/></g>`,
		"fallback": "vadivam:bed",
	});
}

export default Component;
