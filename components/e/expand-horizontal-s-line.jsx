import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_6qlgcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_6qlgcu"/>`,
		"fallback": "ri:expand-horizontal-s-line",
	});
}

export default Component;
