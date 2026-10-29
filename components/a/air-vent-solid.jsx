import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ebemmqvjw.css';
import '../../css/y/y8rnrcbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ebemmqvjw"/><path class="wm-a y8rnrcbxg"/></g>`,
		"fallback": "withicons:air-vent-solid",
	});
}

export default Component;
