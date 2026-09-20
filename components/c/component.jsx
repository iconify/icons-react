import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coud3-lxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coud3-lxj"/>`,
		"fallback": "mynaui:component",
	});
}

export default Component;
