import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir1wpry2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir1wpry2n"/>`,
		"fallback": "mynaui:hash-diamond",
	});
}

export default Component;
