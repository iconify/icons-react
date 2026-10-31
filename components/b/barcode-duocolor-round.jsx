import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7irwtb8m.css';
import '../../css/l/ld1vm1efx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x7irwtb8m"/><path class="ld1vm1efx"/></g>`,
		"fallback": "coolicons:barcode-duocolor-round",
	});
}

export default Component;
