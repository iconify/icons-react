import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/na3w2hbjp.css';
import '../../css/g/g4qe_r9hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="na3w2hbjp"/><path class="g4qe_r9hp"/></g>`,
		"fallback": "lucide:download",
	});
}

export default Component;
