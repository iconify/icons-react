import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/ahftqnl7w.css';
import '../../css/c/cx_-anfrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ahftqnl7w"/><path class="cx_-anfrw"/></g>`,
		"fallback": "keyline-icons:audio-lines-sparkles-sharp",
	});
}

export default Component;
