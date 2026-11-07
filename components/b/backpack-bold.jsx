import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_f_qcc_q.css';
import '../../css/l/lp0dbjbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_f_qcc_q"/><path class="lp0dbjbtt"/>`,
		"fallback": "solar:backpack-bold",
	});
}

export default Component;
