import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bet2wtq1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bet2wtq1z"/>`,
		"fallback": "iconamoon:arrow-up-1-fill",
	});
}

export default Component;
