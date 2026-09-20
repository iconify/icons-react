import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cranq_oum.css';
import '../../css/l/lep5txbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cranq_oum"/><path class="lep5txbfc"/></g>`,
		"fallback": "lucide:fire-extinguisher",
	});
}

export default Component;
