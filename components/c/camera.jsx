import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/foz3o_gzj.css';
import '../../css/b/bmhr31owo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="foz3o_gzj"/><path class="bmhr31owo"/></g>`,
		"fallback": "nrk:camera",
	});
}

export default Component;
