import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e1dxf3bik.css';
import '../../css/y/y143befag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e1dxf3bik"/><path class="y143befag"/></g>`,
		"fallback": "keyline-icons:git-pull-request-arrow-two-tone",
	});
}

export default Component;
