import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfk5-2ass.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfk5-2ass"/>`,
		"fallback": "mingcute:danmaku-line",
	});
}

export default Component;
