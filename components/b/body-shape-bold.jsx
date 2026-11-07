import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf4ca1btm.css';
import '../../css/x/xa-1wqb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf4ca1btm"/><path class="xa-1wqb0z"/>`,
		"fallback": "solar:body-shape-bold",
	});
}

export default Component;
