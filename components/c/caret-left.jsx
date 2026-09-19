import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmtew4bir.css';

const viewBox = {"width":112,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmtew4bir"/>`,
		"fallback": "zmdi:caret-left",
	});
}

export default Component;
