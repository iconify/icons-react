import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0efmsbjc.css';
import '../../css/d/dofdo7dsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k0efmsbjc"/><path class="dofdo7dsi"/></g>`,
		"fallback": "lucide-lab:feather-square",
	});
}

export default Component;
