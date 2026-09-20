import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pmwqcibde.css';
import '../../css/k/kpww7eb7a.css';
import '../../css/z/z8u2d0y7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pmwqcibde"/><path class="kpww7eb7a"/><path class="z8u2d0y7b"/></g>`,
		"fallback": "streamline-freehand:camera-settings-flip",
	});
}

export default Component;
