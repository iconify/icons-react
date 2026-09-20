import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4y7i2bog.css';
import '../../css/z/z74xy-b0z.css';
import '../../css/e/ej9s_0bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u4y7i2bog"/><path class="z74xy-b0z"/><path class="ej9s_0bwp"/></g>`,
		"fallback": "streamline-freehand:advertising-ad-browser",
	});
}

export default Component;
