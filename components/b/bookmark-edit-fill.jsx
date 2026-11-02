import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9tp054ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9tp054ya"/>`,
		"fallback": "mingcute:bookmark-edit-fill",
	});
}

export default Component;
