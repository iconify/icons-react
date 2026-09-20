import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucrh_jy1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ucrh_jy1m"/>`,
		"fallback": "mingcute:drop-fill",
	});
}

export default Component;
