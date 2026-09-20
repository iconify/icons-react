import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txm3c8rvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txm3c8rvj"/>`,
		"fallback": "mynaui:home-plus",
	});
}

export default Component;
