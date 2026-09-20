import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvesrfbzk.css';
import '../../css/u/ur907-bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvesrfbzk"/><path class="ur907-bxb"/>`,
		"fallback": "mingcute:beard-line",
	});
}

export default Component;
