import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a36kvcc-u.css';
import '../../css/h/hm1y73b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a36kvcc-u"/><path class="hm1y73b9m"/>`,
		"fallback": "bx:bx-cool",
	});
}

export default Component;
