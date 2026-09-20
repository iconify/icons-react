import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5-h28bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5-h28bjq"/>`,
		"fallback": "mynaui:danger-square",
	});
}

export default Component;
