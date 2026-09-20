import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wdl10clxd.css';
import '../../css/e/e0qg3-blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wdl10clxd"/><path class="e0qg3-blf"/></g>`,
		"fallback": "lineicons:camera-1",
	});
}

export default Component;
