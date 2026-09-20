import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvz-c3bhf.css';
import '../../css/x/x9b50xb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zvz-c3bhf"/><path class="x9b50xb7v"/></g>`,
		"fallback": "keyline-icons:align-justify-duotone",
	});
}

export default Component;
