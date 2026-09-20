import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg6hbfl5t.css';
import '../../css/o/o7-xjtbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg6hbfl5t"/><path clip-rule="evenodd" class="o7-xjtbae"/>`,
		"fallback": "lineicons:badge-decagram-percent",
	});
}

export default Component;
