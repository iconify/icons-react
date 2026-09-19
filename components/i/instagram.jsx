import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9kyeodza.css';
import '../../css/t/t_0rrslox.css';
import '../../css/w/wxma-tm4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9kyeodza"/><path class="t_0rrslox"/><circle class="wxma-tm4b"/>`,
		"fallback": "circum:instagram",
	});
}

export default Component;
