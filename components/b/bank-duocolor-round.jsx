import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k8k5xbcwl.css';
import '../../css/o/ocel1obnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k8k5xbcwl"/><path class="ocel1obnu"/></g>`,
		"fallback": "coolicons:bank-duocolor-round",
	});
}

export default Component;
