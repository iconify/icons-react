import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unyy2gbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unyy2gbfv"/>`,
		"fallback": "mingcute:cloud-fill",
	});
}

export default Component;
