import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ng5njjbyf.css';
import '../../css/l/l-g4ze3hi.css';
import '../../css/h/h6rwxxx8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ng5njjbyf"/><path class="l-g4ze3hi"/><path class="h6rwxxx8m"/></g>`,
		"fallback": "basil:hotspot-solid",
	});
}

export default Component;
