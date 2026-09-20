import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/y/y5mzjcb9y.css';
import '../../css/i/ig741kbet.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="y5mzjcb9y"/><path class="ig741kbet"/></g>`,
		"fallback": "streamline-color:ascending-number-order",
	});
}

export default Component;
