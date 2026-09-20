import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy-g8lbjc.css';
import '../../css/c/c_jcusmko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy-g8lbjc"/><path class="c_jcusmko"/>`,
		"fallback": "mingcute:baby-line",
	});
}

export default Component;
