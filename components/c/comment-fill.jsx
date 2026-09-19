import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oji4ukc8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oji4ukc8w"/>`,
		"fallback": "iconamoon:comment-fill",
	});
}

export default Component;
