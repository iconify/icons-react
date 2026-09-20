import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pirs2csfw.css';
import '../../css/c/cnsfvccno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pirs2csfw"/><path class="cnsfvccno"/></g>`,
		"fallback": "tabler:device-airtag",
	});
}

export default Component;
