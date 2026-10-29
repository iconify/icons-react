import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x49xngbjf.css';
import '../../css/m/mkibynbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x49xngbjf"/><path class="mkibynbaa wm-a"/></g>`,
		"fallback": "withicons:battery-solid",
	});
}

export default Component;
