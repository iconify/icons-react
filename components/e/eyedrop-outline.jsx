import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_e9s3b0c.css';
import '../../css/p/pj_2zb4qu.css';
import '../../css/i/ie4mcb0dg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_e9s3b0c"/><rect transform="rotate(45 307.788 204.2)" class="pj_2zb4qu"/><path class="ie4mcb0dg"/>`,
		"fallback": "ion:eyedrop-outline",
	});
}

export default Component;
