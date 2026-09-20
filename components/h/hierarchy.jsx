import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yzn7b943h.css';
import '../../css/r/ru1594bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yzn7b943h"/><path class="ru1594bps"/></g>`,
		"fallback": "streamline-freehand:hierarchy",
	});
}

export default Component;
