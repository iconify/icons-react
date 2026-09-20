import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n00dcfb1c.css';
import '../../css/n/n1jqvfb0i.css';
import '../../css/o/ouz__2zvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n00dcfb1c"/><path class="n1jqvfb0i"/><path class="ouz__2zvt"/></g>`,
		"fallback": "streamline-freehand:crop-image",
	});
}

export default Component;
