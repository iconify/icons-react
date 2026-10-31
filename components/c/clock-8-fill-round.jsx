import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxkkocc_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxkkocc_d"/>`,
		"fallback": "coolicons:clock-8-fill-round",
	});
}

export default Component;
