import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmvtqzacp.css';
import '../../css/y/yox3j-b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmvtqzacp"/><path class="yox3j-b4i"/>`,
		"fallback": "bx:bx-book",
	});
}

export default Component;
