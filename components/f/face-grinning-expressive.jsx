import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l9y6ou8am.css';
import '../../css/o/o3w6sably.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l9y6ou8am"/><path class="o3w6sably"/></g>`,
		"fallback": "nrk:face-grinning-expressive",
	});
}

export default Component;
