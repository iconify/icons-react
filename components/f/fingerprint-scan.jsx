import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n87_pfbmx.css';
import '../../css/t/t-4emtras.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n87_pfbmx"/><path class="t-4emtras"/></g>`,
		"fallback": "tabler:fingerprint-scan",
	});
}

export default Component;
