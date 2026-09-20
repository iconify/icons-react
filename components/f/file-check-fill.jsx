import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvhu42n8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvhu42n8z"/>`,
		"fallback": "ri:file-check-fill",
	});
}

export default Component;
