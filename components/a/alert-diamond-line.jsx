import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbj_d9baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbj_d9baz"/>`,
		"fallback": "mingcute:alert-diamond-line",
	});
}

export default Component;
