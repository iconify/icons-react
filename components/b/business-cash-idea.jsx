import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qv7p_4b9h.css';
import '../../css/l/lz0o2_7zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qv7p_4b9h"/><path class="lz0o2_7zc"/></g>`,
		"fallback": "streamline-freehand:business-cash-idea",
	});
}

export default Component;
