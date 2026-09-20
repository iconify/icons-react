import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r63fawbfm.css';
import '../../css/v/vmp7c082d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r63fawbfm"/><path class="vmp7c082d"/></g>`,
		"fallback": "keyline-icons:app-minus-two-tone",
	});
}

export default Component;
