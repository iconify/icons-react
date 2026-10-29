import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w4fklccqs.css';
import '../../css/x/x2wfbzbcz.css';
import '../../css/f/fkvw3pbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w4fklccqs"/><path class="wm-a x2wfbzbcz"/><path class="fkvw3pbgy wm-a"/></g>`,
		"fallback": "withicons:fingerprint",
	});
}

export default Component;
