import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jepl03bwk.css';
import '../../css/r/r8ag8bbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jepl03bwk"/><path class="r8ag8bbay"/></g>`,
		"fallback": "solar:gallery-wide-outline",
	});
}

export default Component;
