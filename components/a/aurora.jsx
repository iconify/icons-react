import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xziip8b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xziip8b_k"/>`,
		"fallback": "token:aurora",
	});
}

export default Component;
