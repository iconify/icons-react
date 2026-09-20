import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxq7l2b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxq7l2b_o"/>`,
		"fallback": "simple-icons:cakephp",
	});
}

export default Component;
