import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dpotciqzk.css';
import '../../css/g/g336m78wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dpotciqzk"/><path class="g336m78wc"/></g>`,
		"fallback": "streamline-freehand:equalizer-phone-application-2",
	});
}

export default Component;
