import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx4kxjvmq.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx4kxjvmq"/>`,
		"fallback": "jam:computer-f",
	});
}

export default Component;
