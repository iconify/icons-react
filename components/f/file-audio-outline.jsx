import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m6go74jvj.css';
import '../../css/f/f_ieh2bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m6go74jvj"/><path class="f_ieh2bbz"/></g>`,
		"fallback": "solar:file-audio-outline",
	});
}

export default Component;
