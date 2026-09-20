import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5um50l6c.css';
import '../../css/e/e0xvdlbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r5um50l6c"/><path class="e0xvdlbxo"/></g>`,
		"fallback": "keyline-icons:file-arrow-up-duotone",
	});
}

export default Component;
