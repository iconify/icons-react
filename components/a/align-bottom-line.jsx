import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jkuojibnm.css';
import '../../css/n/ncpylf9as.css';
import '../../css/k/krp1_7ygc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jkuojibnm"/><rect transform="rotate(-90 6 17)" class="ncpylf9as"/><rect transform="rotate(-90 14 17)" class="krp1_7ygc"/></g>`,
		"fallback": "majesticons:align-bottom-line",
	});
}

export default Component;
