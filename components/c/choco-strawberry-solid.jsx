import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rwg2ko6dt.css';
import '../../css/p/ph0vp3csf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rwg2ko6dt"/><path class="ph0vp3csf wm-a"/></g>`,
		"fallback": "withicons:choco-strawberry-solid",
	});
}

export default Component;
