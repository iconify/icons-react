import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr53k_d-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr53k_d-q"/>`,
		"fallback": "token:hashkey",
	});
}

export default Component;
