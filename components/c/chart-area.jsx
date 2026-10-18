import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmfpvvbxr.css';
import '../../css/j/j9wrs-0li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nmfpvvbxr"/><path class="j9wrs-0li"/></g>`,
		"fallback": "vadivam:chart-area",
	});
}

export default Component;
