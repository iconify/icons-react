import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5um50l6c.css';
import '../../css/u/uh_hiwj8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r5um50l6c"/><path class="uh_hiwj8n"/></g>`,
		"fallback": "keyline-icons:file-arrow-down-duotone",
	});
}

export default Component;
