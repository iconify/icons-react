import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeke05bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeke05bza"/>`,
		"fallback": "ri:folder-2-line",
	});
}

export default Component;
