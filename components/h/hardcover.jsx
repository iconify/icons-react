import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7upzrb1g.css';
import '../../css/n/n94t68b6z.css';
import '../../css/k/k_1_-sblr.css';
import '../../css/h/hd3wd_jdl.css';
import '../../css/x/x0i-pxbgv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7upzrb1g"/><path class="n94t68b6z"/><path class="k_1_-sblr"/><path class="hd3wd_jdl"/><path class="x0i-pxbgv"/>`,
		"fallback": "selfhst:hardcover",
	});
}

export default Component;
