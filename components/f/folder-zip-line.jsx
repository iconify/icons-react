import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jckk0c03o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jckk0c03o"/>`,
		"fallback": "ri:folder-zip-line",
	});
}

export default Component;
