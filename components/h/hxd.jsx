import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvfgwur0k.css';
import '../../css/j/ji7wcabrd.css';
import '../../css/z/zqn5jqduv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvfgwur0k"/><path class="ji7wcabrd"/><path class="zqn5jqduv"/>`,
		"fallback": "token:hxd",
	});
}

export default Component;
