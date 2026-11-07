import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv4_o-byj.css';
import '../../css/w/wzjbfwbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv4_o-byj"/><path clip-rule="evenodd" class="wzjbfwbgd"/>`,
		"fallback": "solar:gallery-round-bold",
	});
}

export default Component;
