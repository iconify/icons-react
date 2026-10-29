import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j453z2bta.css';
import '../../css/u/uwie0-brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="j453z2bta"/><path class="uwie0-brs wm-a"/></g>`,
		"fallback": "withicons:airplay-solid",
	});
}

export default Component;
