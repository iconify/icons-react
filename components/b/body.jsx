import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm4wx3b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm4wx3b_n"/>`,
		"fallback": "boxicons:body",
	});
}

export default Component;
