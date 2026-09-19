import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lqfgslake.css';
import '../../css/s/sifom2_ld.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lqfgslake"/><path class="sifom2_ld"/></g>`,
		"fallback": "bi:droplet-half",
	});
}

export default Component;
