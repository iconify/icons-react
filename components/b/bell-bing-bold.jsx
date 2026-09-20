import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha2wewu4o.css';
import '../../css/e/e15g94bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha2wewu4o"/><path clip-rule="evenodd" class="e15g94bve"/>`,
		"fallback": "solar:bell-bing-bold",
	});
}

export default Component;
