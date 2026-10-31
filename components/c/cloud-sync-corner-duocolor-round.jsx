import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tynrrxtsf.css';
import '../../css/d/dlyl6xb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tynrrxtsf"/><path class="dlyl6xb5p"/></g>`,
		"fallback": "coolicons:cloud-sync-corner-duocolor-round",
	});
}

export default Component;
