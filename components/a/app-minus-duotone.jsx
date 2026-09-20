import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r63fawbfm.css';
import '../../css/h/h-3eqtbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r63fawbfm"/><path class="h-3eqtbix"/></g>`,
		"fallback": "keyline-icons:app-minus-duotone",
	});
}

export default Component;
