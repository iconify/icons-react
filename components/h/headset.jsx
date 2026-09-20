import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o81-p-bxv.css';
import '../../css/v/vktdhdc-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o81-p-bxv"/><path class="vktdhdc-c"/></g>`,
		"fallback": "lucide:headset",
	});
}

export default Component;
