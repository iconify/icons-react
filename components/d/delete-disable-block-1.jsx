import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bj4dtgb6a.css';
import '../../css/q/qblms7ryd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bj4dtgb6a"/><path class="qblms7ryd"/></g>`,
		"fallback": "streamline-freehand:delete-disable-block-1",
	});
}

export default Component;
