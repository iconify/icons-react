import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypjs-2btp.css';
import '../../css/s/skx_edbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ypjs-2btp"/><path class="skx_edbgb"/></g>`,
		"fallback": "coolicons:dna-duocolor-round",
	});
}

export default Component;
