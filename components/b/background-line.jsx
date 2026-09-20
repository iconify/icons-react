import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0j_agsqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0j_agsqq"/>`,
		"fallback": "mingcute:background-line",
	});
}

export default Component;
