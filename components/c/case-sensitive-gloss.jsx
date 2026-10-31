import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yrv7zvlxs.css';
import '../../css/t/txna0in0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k yrv7zvlxs"/><path class="txna0in0d wm-a"/></g>`,
		"fallback": "withicons:case-sensitive-gloss",
	});
}

export default Component;
