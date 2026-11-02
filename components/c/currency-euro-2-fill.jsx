import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_pgp3iqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_pgp3iqh"/>`,
		"fallback": "mingcute:currency-euro-2-fill",
	});
}

export default Component;
