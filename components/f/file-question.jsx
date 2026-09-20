import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/up6z22b1n.css';
import '../../css/b/b6e_j2rdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="up6z22b1n"/><path class="b6e_j2rdr"/></g>`,
		"fallback": "lucide:file-question",
	});
}

export default Component;
