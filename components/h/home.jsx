import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yorjo8b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yorjo8b9o"/>`,
		"fallback": "boxicons:home",
	});
}

export default Component;
