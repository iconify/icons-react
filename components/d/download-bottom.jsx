import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h165_wgjr.css';
import '../../css/k/k-9hs7bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h165_wgjr"/><path class="k-9hs7bqf"/></g>`,
		"fallback": "streamline-ultimate-color:download-bottom",
	});
}

export default Component;
