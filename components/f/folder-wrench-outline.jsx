import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpi8iibkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpi8iibkq"/>`,
		"fallback": "mdi:folder-wrench-outline",
	});
}

export default Component;
