import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jkuojibnm.css';
import '../../css/z/zretg7bof.css';
import '../../css/r/rho9mbbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jkuojibnm"/><rect transform="rotate(-90 6 17)" class="zretg7bof"/><rect transform="rotate(-90 14 17)" class="rho9mbbhy"/></g>`,
		"fallback": "majesticons:align-bottom",
	});
}

export default Component;
