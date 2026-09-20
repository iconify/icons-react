import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoqfu3b7n.css';
import '../../css/z/zpm4lyb8b.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoqfu3b7n"/><path class="zpm4lyb8b"/><path class="ooafjrbnh"/>`,
		"fallback": "pixel:disc",
	});
}

export default Component;
