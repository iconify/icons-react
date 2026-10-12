import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnz67-bnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnz67-bnm"/>`,
		"fallback": "garden:basketball-stroke-20",
	});
}

export default Component;
