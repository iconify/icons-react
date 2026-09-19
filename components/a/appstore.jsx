import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5niq8rsn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5niq8rsn"/>`,
		"fallback": "ant-design:appstore",
	});
}

export default Component;
