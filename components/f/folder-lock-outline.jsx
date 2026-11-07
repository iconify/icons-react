import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rtt8c-b6t.css';
import '../../css/i/io8lhwbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rtt8c-b6t"/><path class="io8lhwbgu"/></g>`,
		"fallback": "solar:folder-lock-outline",
	});
}

export default Component;
