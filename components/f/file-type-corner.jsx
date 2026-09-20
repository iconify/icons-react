import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5s73brul.css';
import '../../css/v/v4u1pfbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z5s73brul"/><path class="v4u1pfbdo"/></g>`,
		"fallback": "lucide:file-type-corner",
	});
}

export default Component;
