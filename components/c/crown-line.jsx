import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_jzwbbto.css';
import '../../css/o/obsscdhly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j_jzwbbto"/><circle class="obsscdhly"/></g>`,
		"fallback": "majesticons:crown-line",
	});
}

export default Component;
