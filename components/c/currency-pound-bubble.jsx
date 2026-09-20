import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hlv7wob9m.css';
import '../../css/r/r8ksv5dgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hlv7wob9m"/><path class="r8ksv5dgr"/></g>`,
		"fallback": "streamline-freehand:currency-pound-bubble",
	});
}

export default Component;
