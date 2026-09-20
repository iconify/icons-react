import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prht9cg7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prht9cg7s"/>`,
		"fallback": "ri:folder-unknow-line",
	});
}

export default Component;
