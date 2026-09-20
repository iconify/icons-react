import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pk93sbcbd.css';
import '../../css/p/p7vdcjcna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pk93sbcbd"/><path class="p7vdcjcna"/></g>`,
		"fallback": "keyline-icons:hand-closed-two-tone",
	});
}

export default Component;
