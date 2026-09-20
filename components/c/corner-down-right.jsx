import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uc76hgb4j.css';
import '../../css/x/x_sizeyma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uc76hgb4j"/><path class="x_sizeyma"/></g>`,
		"fallback": "lucide:corner-down-right",
	});
}

export default Component;
