import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oak4c5bhj.css';
import '../../css/k/k8nc2n2mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oak4c5bhj"/><path class="k8nc2n2mm"/></g>`,
		"fallback": "coolicons:book-duocolor-round",
	});
}

export default Component;
