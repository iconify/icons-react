import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq6b85b-a.css';
import '../../css/q/qku8lwbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq6b85b-a"/><path class="qku8lwbhq"/>`,
		"fallback": "solar:flag-2-bold-duotone",
	});
}

export default Component;
