import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg-suhcje.css';
import '../../css/c/c8rfqr2hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg-suhcje"/><path class="c8rfqr2hy"/>`,
		"fallback": "mingcute:camera-2-line",
	});
}

export default Component;
