import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix4609bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix4609bzj"/>`,
		"fallback": "gridicons:ellipsis",
	});
}

export default Component;
