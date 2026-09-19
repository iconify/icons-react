import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l-u48tp2m.css';
import '../../css/p/puyafv9da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l-u48tp2m"/><path class="puyafv9da"/></g>`,
		"fallback": "heroicons:chart-pie-solid",
	});
}

export default Component;
