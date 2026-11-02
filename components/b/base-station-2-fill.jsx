import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex-zxk7mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex-zxk7mb"/>`,
		"fallback": "mingcute:base-station-2-fill",
	});
}

export default Component;
