import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwemk-b1r.css';
import '../../css/c/cps-uerrm.css';
import '../../css/h/h8pd_ubye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dwemk-b1r"/><path class="cps-uerrm"/><path class="h8pd_ubye"/></g>`,
		"fallback": "lucide-lab:barn",
	});
}

export default Component;
