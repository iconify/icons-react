import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnd22ob2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wnd22ob2i"/>`,
		"fallback": "iconamoon:arrow-top-left-1-fill",
	});
}

export default Component;
