import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/afszrubmo.css';
import '../../css/r/rt51_fbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="afszrubmo"/><path class="rt51_fbmk wm-s"/></g>`,
		"fallback": "withicons:flashlight-solid",
	});
}

export default Component;
