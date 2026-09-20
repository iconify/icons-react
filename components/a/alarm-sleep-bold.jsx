import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iuensy71g.css';
import '../../css/d/dcg7vbckc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iuensy71g"/><path class="dcg7vbckc"/></g>`,
		"fallback": "solar:alarm-sleep-bold",
	});
}

export default Component;
