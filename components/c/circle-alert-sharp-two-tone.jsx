import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bkcd5iben.css';
import '../../css/b/by26kkbis.css';
import '../../css/l/lju5ynbhb.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bkcd5iben"/><path class="by26kkbis"/><path class="lju5ynbhb"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:circle-alert-sharp-two-tone",
	});
}

export default Component;
