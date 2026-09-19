import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj62jbb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jj62jbb9h"/>`,
		"fallback": "iconamoon:funnel-fill",
	});
}

export default Component;
