import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0yh24b-q.css';
import '../../css/r/rnowmjbsd.css';
import '../../css/j/j2pc4z88n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k0yh24b-q"/><path class="rnowmjbsd"/><rect class="j2pc4z88n"/></g>`,
		"fallback": "lucide:book-lock",
	});
}

export default Component;
