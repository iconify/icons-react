import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o87eodbjm.css';
import '../../css/e/e2ueievub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o87eodbjm"/><path class="e2ueievub"/></g>`,
		"fallback": "tabler:basket-pin",
	});
}

export default Component;
