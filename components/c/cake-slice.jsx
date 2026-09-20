import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k_po2_bqm.css';
import '../../css/w/wt-8bgbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k_po2_bqm"/><circle class="wt-8bgbqv"/></g>`,
		"fallback": "lucide:cake-slice",
	});
}

export default Component;
