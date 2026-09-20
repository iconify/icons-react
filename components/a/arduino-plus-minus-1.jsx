import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pz86ohb8n.css';
import '../../css/d/d2tgt8bqb.css';
import '../../css/p/phun9vjav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pz86ohb8n"/><path class="d2tgt8bqb"/><path class="phun9vjav"/></g>`,
		"fallback": "streamline-freehand:arduino-plus-minus-1",
	});
}

export default Component;
