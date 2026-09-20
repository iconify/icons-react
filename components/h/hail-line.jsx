import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2y0d8bfl.css';
import '../../css/e/exps9_t7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2y0d8bfl"/><path class="exps9_t7h"/>`,
		"fallback": "mingcute:hail-line",
	});
}

export default Component;
