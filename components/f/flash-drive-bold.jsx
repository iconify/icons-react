import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/olxinlbcn.css';
import '../../css/b/b9mjbeu6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="olxinlbcn"/><path class="b9mjbeu6l"/></g>`,
		"fallback": "solar:flash-drive-bold",
	});
}

export default Component;
