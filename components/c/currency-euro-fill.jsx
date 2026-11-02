import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpfw86bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpfw86bgq"/>`,
		"fallback": "mingcute:currency-euro-fill",
	});
}

export default Component;
