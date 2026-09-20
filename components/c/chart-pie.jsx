import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p3jxsfalc.css';
import '../../css/s/sgq5-yptf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p3jxsfalc"/><path class="sgq5-yptf"/></g>`,
		"fallback": "lucide:chart-pie",
	});
}

export default Component;
