import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p4r5sactc.css';
import '../../css/c/cksz3-dde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p4r5sactc"/><path class="cksz3-dde"/></g>`,
		"fallback": "tabler:devices-share",
	});
}

export default Component;
