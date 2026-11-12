import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-cv1bcge.css';
import '../../css/c/cslq8cc3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p-cv1bcge"/><path class="cslq8cc3c"/></g>`,
		"fallback": "tabler:devices-key",
	});
}

export default Component;
