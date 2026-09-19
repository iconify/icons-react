import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jscfo15-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jscfo15-i"/>`,
		"fallback": "iconamoon:comment",
	});
}

export default Component;
