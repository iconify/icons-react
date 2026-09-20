import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd0hplddj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd0hplddj"/>`,
		"fallback": "simple-icons:fareharbor",
	});
}

export default Component;
