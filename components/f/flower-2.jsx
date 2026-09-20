import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4rtf3bmo.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/e/ey8qu_bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a4rtf3bmo"/><circle class="ptvu1u_4n"/><path class="ey8qu_bww"/></g>`,
		"fallback": "lucide:flower-2",
	});
}

export default Component;
