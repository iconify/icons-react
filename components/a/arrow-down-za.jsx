import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjp0w2bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjp0w2bvn"/>`,
		"fallback": "lucide:arrow-down-za",
	});
}

export default Component;
