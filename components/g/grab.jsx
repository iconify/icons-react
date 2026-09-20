import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cp75ukgus.css';
import '../../css/j/j_nt2pbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cp75ukgus"/><path class="j_nt2pbrv"/></g>`,
		"fallback": "lucide:grab",
	});
}

export default Component;
