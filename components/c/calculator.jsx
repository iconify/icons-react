import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdq_hub2b.css';
import '../../css/s/s0bgrme9m.css';
import '../../css/e/ek-5ple3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 21.25 2.73)" class="tdq_hub2b"/><rect transform="matrix(-1 0 0 1 21.25 2.73)" class="s0bgrme9m"/><path class="ek-5ple3u"/></g>`,
		"fallback": "andrsrxn:calculator",
	});
}

export default Component;
