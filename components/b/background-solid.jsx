import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z445kzbfo.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/m/mkh-v0ekq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z445kzbfo"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><rect transform="matrix(0 -1 -1 0 18.1 18.1)" class="mkh-v0ekq"/></g>`,
		"fallback": "andrsrxn:background-solid",
	});
}

export default Component;
