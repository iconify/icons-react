import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7fhqy1lz.css';
import '../../css/a/a4m4b3elc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7fhqy1lz"/><path class="a4m4b3elc"/></g>`,
		"fallback": "keyline-icons:briefcase-duotone",
	});
}

export default Component;
