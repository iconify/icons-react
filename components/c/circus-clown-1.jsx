import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qsoymgbwb.css';
import '../../css/y/yc3ce7q3e.css';
import '../../css/p/pl9qoeb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qsoymgbwb"/><path class="yc3ce7q3e"/><path class="pl9qoeb3e"/></g>`,
		"fallback": "streamline-freehand-color:circus-clown-1",
	});
}

export default Component;
