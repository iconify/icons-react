import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl27zsb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl27zsb-w"/>`,
		"fallback": "mdi:clock-end",
	});
}

export default Component;
