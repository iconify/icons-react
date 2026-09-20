import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv3t_9dyo.css';
import '../../css/h/h-fa8m_xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv3t_9dyo"/><path class="h-fa8m_xj"/>`,
		"fallback": "stash:cloud-arrow-up-light",
	});
}

export default Component;
